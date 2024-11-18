require("dotenv").config();
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);
  const blogId = process.env.BLOG_ID;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid email address" }),
    };
  }

  try {
    const response = await fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${blogId}/subscriptions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
