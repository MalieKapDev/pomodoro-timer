import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatusMessage(""); // Reset status message on new submission

    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_NETLIFY_FUNCTIONS_URL}/subscribe`,
        { email }
      );

      if (response.status === 200) {
        setStatusMessage("Subscription successful!");
        setEmail(""); // Clear the input field
      } else {
        setStatusMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error.message);
      setStatusMessage("An error occurred while subscribing.");
    }
  };

  return (
    <div className="d-flex pt-1 pb-1">
      <div className="wp-block-jetpack-subscriptions">
        <div className="wp-block-jetpack-subscriptions__container">
          <form onSubmit={handleSubmit}>
            <div className="wp-block-jetpack-subscriptions__form-elements">
              <div className="row">
                <div className="col pe-0">
                  <p>
                    <label
                      htmlFor="subscribe-field"
                      className="screen-reader-text d-none"
                    >
                      Type your email…
                    </label>
                    <input
                      type="email"
                      id="subscribe-field" // Correctly links the label to the input
                      name="email"
                      className="email-input"
                      placeholder="Type your email…"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {error && <small className="error">{error}</small>}
                  </p>
                </div>
                <div className="col ps-0">
                  <p>
                    <button
                      type="submit"
                      className="btn-sm subscribe-button ms-2"
                    >
                      Subscribe
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
