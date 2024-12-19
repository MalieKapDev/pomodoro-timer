import React, { useState, useRef, useEffect } from "react";
import LengthControl from "./lengthControl";
import Timer from "./timer";
import "./pomodoroTimer.css";

const PomodoroTimer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, setTimerState] = useState("stopped");
  const [timerType, setTimerType] = useState("Current Session");
  const [timer, setTimer] = useState(sessionLength * 60); // Initialize with session length in seconds
  const [alarmColor, setAlarmColor] = useState({ color: "#3dccc7" });
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  // Handle increment or decrement of lengths
  const handleLengthChange = (type, operation) => {
    if (timerState === "running") return;

    const isBreak = type === "break";
    const currentLength = isBreak ? breakLength : sessionLength;
    const newLength =
      operation === "increment" && currentLength < 60
        ? currentLength + 1
        : operation === "decrement" && currentLength > 1
        ? currentLength - 1
        : currentLength;

    if (isBreak) {
      setBreakLength(newLength);
    } else {
      setSessionLength(newLength);
      if (timerType === "Current Session") {
        setTimer(newLength * 60); // Update timer if in session mode
      }
    }
  };

  // Calculate progress
  const progress =
    (timer /
      (timerType === "Current Session"
        ? sessionLength * 60
        : breakLength * 60)) *
    100;

  // Timer operations
  const startTimer = () => {
    setTimerState("running");
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current);
          setTimerState("stopped");
          // Optionally handle timer complete logic
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    setTimerState("stopped");
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimerState("stopped");
    setTimerType("Current Session");
    setTimer(25 * 60); // Reset to 25 minutes session
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  // Timer state management
  useEffect(() => {
    if (timer === 0) {
      audioRef.current.play();
      const nextType =
        timerType === "Current Session" ? "Break" : "Current Session";
      setTimerType(nextType);
      setTimer(
        nextType === "Current Session" ? sessionLength * 60 : breakLength * 60
      );
    } else if (timer < 60) {
      setAlarmColor({ color: "#a50d0d" }); // Red color when less than 1 minute
    } else {
      setAlarmColor({ color: "#3dccc7" });
    }
  }, [timer, timerType, breakLength, sessionLength]);

  // Keyboard shortcuts for play/pause and reset
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        timerState === "stopped" ? startTimer() : stopTimer();
      } else if (e.key.toLowerCase() === "r") {
        resetTimer();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [timerState]);

  // Notification handling
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (timer === 0 && Notification.permission === "granted") {
      const notificationMessage =
        timerType === "Current Session" ? "Time for a break!" : "Back to work!";
      new Notification("Pomodoro Timer", { body: notificationMessage });
    }
  }, [timer, timerType]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}: ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="main-timer-container">
      {/* Timer */}
      <div className="row timer ms-2 me-2 mt-1 mb-2">
        <Timer
          timerType={timerType}
          timeLeft={formatTime()}
          alarmColor={alarmColor}
          progress={progress}
        />
      </div>

      {/* Timer Controls */}
      <div className="timer-control ms-2 me-2 mt-3 mb-2">
        <button
          className="timer-control-btn"
          onClick={timerState === "stopped" ? startTimer : stopTimer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className={`bi ${
              timerState === "stopped"
                ? "bi-play-circle-fill"
                : "bi-pause-circle-fill"
            }`}
            viewBox="0 0 16 16"
          >
            <path
              d={
                timerState === "stopped"
                  ? "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"
                  : "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"
              }
            />
          </svg>
        </button>
        <button className="timer-control-btn" onClick={resetTimer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
            <path
              fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
            />
          </svg>
        </button>
      </div>

      {/* Length Controls */}

      <div className="length-control mt-3">
        <LengthControl
          title="Break"
          value={breakLength}
          onIncrement={() => handleLengthChange("break", "increment")}
          onDecrement={() => handleLengthChange("break", "decrement")}
        />
      </div>

      <div className="length-control mt-3 mb-1">
        <LengthControl
          title="Session"
          value={sessionLength}
          onIncrement={() => handleLengthChange("session", "increment")}
          onDecrement={() => handleLengthChange("session", "decrement")}
        />
      </div>

      <audio
        id="beep"
        preload="auto"
        ref={audioRef}
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default PomodoroTimer;
