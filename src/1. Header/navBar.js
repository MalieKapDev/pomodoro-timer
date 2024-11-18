import React from "react";
import MenuBurger from "./menuBurger";
import NavBarLinks from "./navBarLinks";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <hr className="nav-bar-divider" />
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid justify-content-center">
          <MenuBurger />
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavBarLinks />
          </div>
        </div>
      </nav>
      <hr className="nav-bar-divider mb-5" />
    </div>
  );
}

export default NavBar;
