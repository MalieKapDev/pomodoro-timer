import React from "react";
import "./project.css";
import PomodoroTimer from "./pomodoroTimer";

function Project() {
  return (
    <div className="project-container">
      <div className="card">
        <h5 className="card-header" style={{ backgroundColor: "#e9ecef" }}>
          ⏱️ Pomodoro Timer
        </h5>
        <div className="card-body">
          <h5 className="card-title">A little about this project:</h5>
          <p className="card-text">
            Crafted in the React framework it allows users to set custom
            sessions and break durations. Facilitating time management and
            productivity with visual cues and alerts for seamless workflow
            scheduling.
          </p>

          <PomodoroTimer />
        </div>
      </div>
    </div>
  );
}

export default Project;
