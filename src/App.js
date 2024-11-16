import React from "react";
import LogoContainer from "./logoContainer";
import NavBar from "./navBar";
import Project from "./project";
import OtherProjects from "./otherProjects";
import "./App.css";

function App() {
  return (
    <div className="container-fluid main-container ps-5 pe-5">
      <LogoContainer />
      <NavBar />
      <Project />
      <OtherProjects />
    </div>
  );
}

export default App;
