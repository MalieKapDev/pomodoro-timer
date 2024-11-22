import React from "react";
import "./talkToMe.css";

function TalkToMe() {
  return (
    <div>
      <button className="btn-sm talk-button">
        <a
          className="talk-link"
          target="_blank"
          rel="noreferrer"
          href="https://codewithmalie.com/contact-learning-front-end-development/"
        >
          Talk to me here
        </a>
      </button>
    </div>
  );
}

export default TalkToMe;
