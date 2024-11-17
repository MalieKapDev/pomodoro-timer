import React from "react";
import "./newsLetter.css";

function NewsLetter() {
  return (
    <div className="d-flex pt-2 pb-2">
      <input
        required="required"
        type="email"
        name="email"
        className="email-input"
        style={{ fontSize: "14px", padding: "13px 18px 13px 18px" }}
        placeholder="Type your email..."
        value
        id="subscribe"
        title="Please fill in this field."
      />
      <button
        type="button"
        className="btn-sm btn-subscribe ms-2"
        style={{ fontSize: "14px", padding: "13px 18px 13px 18px" }}
      >
        Subscribe
      </button>
    </div>
  );
}

export default NewsLetter;
