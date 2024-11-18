import React, { useState } from "react";
import "./newsLetter.css";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    const clientId = process.env.CLIENT_ID;
    const redirectUri =
      "	https://maliekapdev-pomodoro-timer.netlify.app/oauth/callback";

    const authUrl = `https://public-api.wordpress.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = authUrl;

    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed.");
      }

      alert("Subscription successful!");
      setEmail("");
    } catch (err) {
      setError("Subscription failed. Please try again later.");
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
                      name="email"
                      className="email-input"
                      placeholder="Type your email…"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      id="subscribe-field"
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
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;