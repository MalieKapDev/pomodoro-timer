import { useEffect } from "react";

const CallBack = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      fetch("/.netlify/functions/oauthCallBack", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const { accessToken, refreshToken, expirationTime } = data;

            // Store tokens locally for session use
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
            localStorage.setItem("token_expiration", expirationTime);
          }
        })
        .catch((error) => {
          console.error("Error during OAuth callback:", error.message);
        });
    }
  }, []);

  return null;
};

export default CallBack;