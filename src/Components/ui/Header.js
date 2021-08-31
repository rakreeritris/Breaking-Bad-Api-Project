import React from "react";
import logo from "../../img/logo.png";

function Header() {
  return (
    <header className="center">
      <img src={logo} alt={logo}></img>
    </header>
  );
}

export default Header;
