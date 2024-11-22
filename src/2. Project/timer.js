import React from "react";

const Timer = ({ timerType, timeLeft, alarmColor }) => (
  <div className="timer" style={alarmColor}>
    <div className="timer-wrapper">
      <div id="timer-label">{timerType}</div>
      <div id="time-left">{timeLeft}</div>
    </div>
  </div>
);

export default Timer;
