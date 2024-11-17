import React from "react";
import "./menu.css";

function Menu() {
  return (
    <div>
      <ul className="navbar-nav pt-0" style={{ textAlign: "left" }}>
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://codewithmalie.com/"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://codewithmalie.com/front-end-development-blog-for-beginners/"
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://codewithmalie.com/about-my-front-end-development-journey/"
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://maliekapdev-portfolio.netlify.app/work"
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://codewithmalie.com/contact-learning-front-end-development/"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
