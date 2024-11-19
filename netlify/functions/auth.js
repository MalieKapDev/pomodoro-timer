import axios from "axios";

const getAccessToken = async (code) => {
  const tokenUrl = process.env.OAUTH_TOKEN_URL;
  const redirectUri =
    process.env.NODE_ENV === "production"
      ? process.env.PRODUCTION_REDIRECT_URI
      : process.env.REDIRECT_URI;

  const data = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: redirectUri,
    code,
  });

  try {
    const response = await axios.post(tokenUrl, data.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error; // Rethrow the error after logging it
  }
};

const refreshAccessToken = async (refreshToken) => {
  const tokenUrl = process.env.OAUTH_TOKEN_URL;

  const data = new URLSearchParams();
  data.append("grant_type", "refresh_token");
  data.append("client_id", process.env.CLIENT_ID);
  data.append("client_secret", process.env.CLIENT_SECRET);
  data.append("refresh_token", refreshToken);

  try {
    const response = await axios.post(tokenUrl, data.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return response.data;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw new Error("Failed to refresh access token");
  }
};

module.exports = { refreshAccessToken };
