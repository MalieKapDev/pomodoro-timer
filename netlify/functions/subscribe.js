import axios from "axios";

export const handler = async (event, context) => {
  // CORS headers
  const responseHeaders = {
    "Access-Control-Allow-Origin": "*", // Allow requests from any origin; change for production
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET", // Specify allowed methods
  };

  // Handle preflight requests (CORS OPTIONS requests)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204, // No content response for OPTIONS
      headers: responseHeaders,
    };
  }

  try {
    // Parse the incoming event body to extract email and accessToken
    const { email, accessToken } = JSON.parse(event.body);

    // Validate email
    if (!email) {
      return {
        statusCode: 400,
        headers: responseHeaders, // Include CORS headers in the response
        body: JSON.stringify({ message: "Email is required" }),
      };
    }

    // Validate access token
    if (!accessToken) {
      return {
        statusCode: 400,
        headers: responseHeaders, // Include CORS headers in the response
        body: JSON.stringify({
          message: "Access token is missing. Please reauthenticate.",
        }),
      };
    }

    // Define the request URL for subscription to WordPress
    const url = `https://public-api.wordpress.com/rest/v1.1/sites/${process.env.BLOG_ID}/subscribers/new`;

    // Send a POST request to subscribe the user
    const response = await axios.post(
      url,
      { email },
      {
        headers: { Authorization: Bearer`${accessToken}` }, // Correctly formatted authorization header
      }
    );

    // Return success response
    return {
      statusCode: 200,
      headers: responseHeaders, // Add CORS headers to the response
      body: JSON.stringify({ message: "Subscription successful!" }),
    };
  } catch (error) {
    // Log the error for debugging
    console.error("Subscription error:", error.message);

    // Return error response
    return {
      statusCode: error.response?.status || 500, // Use status from error response or default to 500
      headers: responseHeaders, // Include CORS headers in the error response
      body: JSON.stringify({
        message: "Subscription failed. Please try again.",
        error: error.response?.data || error.message, // Include detailed error information
      }),
    };
  }
};
