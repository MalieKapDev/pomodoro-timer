const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { code } = JSON.parse(event.body);

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Authorization code missing" }),
    };
  }

  try {
    const response = await fetch(
      "https://public-api.wordpress.com/oauth2/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          code: code,
          redirect_uri:
            "https://maliekapdev-pomodoro-timer.netlify.app/oauth/callback",
          grant_type: "authorization_code",
        }),
      }
    );

    const data = await response.json();

    if (response.ok && data.access_token) {
      const { access_token, refresh_token, expires_in } = data;

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          accessToken: access_token,
          refreshToken: refresh_token,
          expirationTime: Date.now() + expires_in * 1000,
        }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Failed to exchange authorization code",
        }),
      };
    }
  } catch (error) {
    console.error("Error during OAuth callback:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};