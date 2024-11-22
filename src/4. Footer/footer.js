import React from "react";
import "./footer.css";
import FollowMe from "./followMe";
import Menu from "./menu";
import TalkToMe from "./talkToMe";

function Footer() {
  return (
    <div>
      <hr className="nav-bar-divider" />
      <footer>
        <div className="row align-items-start m-lg-3">
          <div className="col-lg-4 col-12 follow-me">
            <h6 className="footer-headings pb-3">Follow Me</h6>
            <FollowMe />
          </div>
          <div className="col-lg-3 col-12 pt-3 pb-lg-0 pb-3 pt-lg-0 menu">
            <h6 className="footer-headings pb-2">Menu</h6>
            <Menu />
          </div>
          <div className="col-lg-5 col-12 sign-up">
            <h6 className="footer-headings pb-3">Get in Touch</h6>
            <TalkToMe />
          </div>
        </div>
      </footer>
      <hr className="nav-bar-divider" />
      <div className="footer-coded pt-2 pb-4">
        © 2024 | Coded by Malie Kapelianis
      </div>
    </div>
  );
}

export default Footer;
