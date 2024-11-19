import { useEffect } from "react";
import axios from "axios";

const CallBack = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const handleOAuthCallback = async () => {
      if (code) {
        try {
          const response = await axios.post(
            "/.netlify/functions/oauthCallBack",
            { code }
          );
          const { accessToken, refreshToken, expirationTime } = response.data;

          localStorage.setItem("access_token", accessToken);
          localStorage.setItem("refresh_token", refreshToken);
          localStorage.setItem("token_expiration", expirationTime);
        } catch (error) {
          console.error("Error during OAuth callback:", error.message);
        }
      }
    };

    handleOAuthCallback();
  }, []);

  return null;
};

export default CallBack;
