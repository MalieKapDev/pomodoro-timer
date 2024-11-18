const fetch = require("node-fetch");

exports.isTokenExpired = (tokenExpiration) => {
  return Date.now() > tokenExpiration;
};

exports.refreshAccessToken = async (refreshToken) => {
  try {
    const response = await fetch(
      "https://public-api.wordpress.com/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          refresh_token: refreshToken,
          grant_type: "refresh_token",
        }),
      }
    );

    const data = await response.json();

    if (response.ok && data.access_token) {
      const { access_token, refresh_token, expires_in } = data;
      return {
        accessToken: access_token,
        refreshToken: refresh_token,
        expirationTime: Date.now() + expires_in * 1000,
      };
    } else {
      throw new Error("Failed to refresh access token");
    }
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    throw error;
  }
};