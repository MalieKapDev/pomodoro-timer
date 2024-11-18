import React from "react";

function MenuBurger() {
  return (
    <div>
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
    </div>
  );
}

export default MenuBurger;
