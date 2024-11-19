const { getAccessToken } = require("./auth");

exports.handler = async (event) => {
  try {
    // Validate the incoming event body
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Request body is required" }),
      };
    }

    const { code } = JSON.parse(event.body);

    if (!code) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Authorization code is required" }),
      };
    }

    const tokenData = await getAccessToken(code);

    if (!tokenData || !tokenData.access_token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to retrieve access token" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        expirationTime: tokenData.expires_in,
      }),
    };
  } catch (error) {
    console.error("OAuth callback error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "OAuth token exchange failed",
        error: error.message,
      }),
    };
  }
};
