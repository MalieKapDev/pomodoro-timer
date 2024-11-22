import React, { useState, useRef, useEffect } from "react";
import LengthControl from "./lengthControl";
import Timer from "./timer";
import "./pomodoroTimer.css";

const PomodoroTimer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, setTimerState] = useState("stopped");
  const [timerType, setTimerType] = useState("Session");
  const [timer, setTimer] = useState(1500); // Default session timer in seconds
  const [alarmColor, setAlarmColor] = useState({ color: "white" });
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const handleLengthChange = (type, operation) => {
    if (timerState === "running") return;

    const isBreak = type === "break";
    const currentLength = isBreak ? breakLength : sessionLength;

    if (operation === "increment" && currentLength < 60) {
      isBreak
        ? setBreakLength(breakLength + 1)
        : setSessionLength(sessionLength + 1);
      if (timerType === (isBreak ? "Break" : "Session"))
        setTimer((currentLength + 1) * 60);
    }

    if (operation === "decrement" && currentLength > 1) {
      isBreak
        ? setBreakLength(breakLength - 1)
        : setSessionLength(sessionLength - 1);
      if (timerType === (isBreak ? "Break" : "Session"))
        setTimer((currentLength - 1) * 60);
    }
  };

  const startStopTimer = () => {
    if (timerState === "stopped") {
      setTimerState("running");
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimerState("stopped");
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimerState("stopped");
    setTimerType("Session");
    setTimer(1500);
    setAlarmColor({ color: "white" });
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (timer === 0) {
      audioRef.current.play();
    } else if (timer < 60) {
      setAlarmColor({ color: "#a50d0d" });
    } else {
      setAlarmColor({ color: "white" });
    }

    if (timer < 0) {
      clearInterval(intervalRef.current);
      setTimerType((prev) => (prev === "Session" ? "Break" : "Session"));
      setTimer((prev) =>
        timerType === "Session" ? breakLength * 60 : sessionLength * 60
      );
      startStopTimer();
    }
  }, [timer]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="container main-timer-container">
      <div className="row">
        {/* Break Length Control */}
        <div className="col">
          <div className="length-control">
            <button className="btn-level">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              </svg>
            </button>
            <span className="length-control-heading">Break Length</span>
            <button className="btn-level">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-up-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Session Length Control */}
        <div className="col">
          <div className="length-control">
            <button className="btn-level">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              </svg>
            </button>
            <span className="length-control-heading">Session Length</span>
            <button className="btn-level">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-up-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="row timer">
        <div className="timer-wrapper">
          <h5 className="timer-wrapper-heading">Current Session</h5>
          <div className="timer-wrapper-time-left" id="time-left">
            25:00
          </div>
        </div>
      </div>

      {/* Timer Controls */}
      <div className="timer-control">
        <button className="timer-control-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
          </svg>
        </button>
        <button className="timer-control-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-pause-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
          </svg>
        </button>
        <button className="timer-control-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
