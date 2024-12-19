import React from "react";
import PropTypes from "prop-types";

const Timer = ({ timeLeft, timerType, progress }) => {
  return (
    <div
      className={`timer-wrapper ${
        timerType === "Break" ? "break" : "Current Session"
      }`}
    >
      {/* Timer Label */}
      <div className="timer-wrapper-heading" id="timer-label">
        {timerType}
      </div>

      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        className="circular-progress mt-3 mb-3"
        style={{ "--progress": progress }}
      >
        <circle className="bg"></circle>
        <circle className="fg"></circle>

        {/* Time Left */}
        <text
          className="timer-wrapper-time-left"
          id="time-left"
          x="50%"
          y="55%"
          textAnchor="middle"
        >
          {timeLeft}
        </text>
      </svg>
    </div>
  );
};

Timer.propTypes = {
  timerType: PropTypes.string.isRequired, // Current phase: "Current Session" or "Break"
  timeLeft: PropTypes.string.isRequired, // Time remaining in MM:SS format
};

export default Timer;
