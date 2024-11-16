import React from "react";
import "./logoContainer.css";

function LogoContainer() {
  return (
    <div className="logo-container pt-5 pb-4">
      <h1>
        <a
          className="logo"
          target="_blank"
          rel="noreferrer"
          href="https://www.codewithmalie.com"
        >
          Code With Malie
        </a>
      </h1>
      <p className="tag-line">
        Follow my journey in learning how to code and become a front end
        developer
      </p>
    </div>
  );
}

export default LogoContainer;
