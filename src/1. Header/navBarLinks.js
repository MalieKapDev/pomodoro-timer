import React from "react";

function NavBarLinks() {
  return (
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
  );
}

export default NavBarLinks;
