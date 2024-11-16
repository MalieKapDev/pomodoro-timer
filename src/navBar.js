import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <hr className="nav-bar-divider" />
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              border: "none",
              outline: "none",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.codewithmalie.com"
              >
                Home
              </a>
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href="https://codewithmalie.com/front-end-development-blog-for-beginners/"
              >
                Blog
              </a>
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href="https://codewithmalie.com/about-my-front-end-development-journey/"
              >
                About
              </a>
              <a
                className="nav-link active"
                target="_blank"
                rel="noreferrer"
                href="https://maliekapdev-portfolio.netlify.app/work"
                aria-current="page"
              >
                Work
              </a>
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href="https://codewithmalie.com/contact-learning-front-end-development/"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <hr className="nav-bar-divider mb-5" />
    </div>
  );
}

export default NavBar;
