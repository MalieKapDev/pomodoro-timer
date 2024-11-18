const fetch = require("node-fetch");
const { refreshAccessToken, isTokenExpired } = require("./auth");

exports.handler = async (event) => {
  const { email, refreshToken, accessToken, tokenExpiration } = JSON.parse(
    event.body
  );

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid email address" }),
    };
  }

  try {
    // Check if the token has expired and refresh if needed
    let validAccessToken = accessToken;

    if (isTokenExpired(tokenExpiration)) {
      console.log("Token expired, refreshing...");
      const refreshedTokens = await refreshAccessToken(refreshToken);
      validAccessToken = refreshedTokens.accessToken;
    }

    const blogId = process.env.BLOG_ID;

    const response = await fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${blogId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${validAccessToken}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email,
          action: "subscribe",
          blog_id: blogId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Subscription failed.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error during subscription:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
