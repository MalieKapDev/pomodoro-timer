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
            This Pomodoro Timer, built with React, offers customizable work and
            break durations to support effective time management. Users benefit
            from intuitive controls, dynamic visual cues, and alert
            notifications, ensuring a seamless and productive workflow. Its
            modern design, mobile responsiveness, and polished animations make
            it a standout addition to any productivity toolkit.
          </p>
          <p className="card-text">
            Looking for a behind-the-scenes look at how I rebuilt my Pomodoro
            Timer? Discover the design decisions, challenges, and features that
            make it a standout project. Read my blog post{" "}
            <a
              href="https://codewithmalie.com/pomodoro-timer-project-case-study/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            and see how I turned this idea into a portfolio-worthy application.
          </p>
          <p className="card-text">
            Check out the code for building this Pomodoro Timer on{" "}
            <a
              href="https://github.com/MalieKapDev/pomodoro-timer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub!
            </a>{" "}
            Don’t forget to give it a ⭐ if you find it helpful, and follow me
            for more projects like this!
          </p>
        </div>
      </div>
      <PomodoroTimer />
    </div>
  );
}

export default Project;
