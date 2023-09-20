import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./css/NavBarStyle.css";

function NavBar() {
  return (
    <nav className="NavbarItems">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="/uml">UML</Link>
      <Link to="/merise">Merise</Link>
    </nav>
  );
}

export default NavBar;
