import React from "react";
import LogoContainer from "./1. Header/logoContainer";
import NavBar from "./1. Header/navBar";
import Project from "./2. Project/project";
import OtherProjects from "./3. Other Projects/otherProjects";
import Footer from "./4. Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="container-fluid main-container ps-5 pe-5">
      <LogoContainer />
      <NavBar />
      <Project />
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default App;