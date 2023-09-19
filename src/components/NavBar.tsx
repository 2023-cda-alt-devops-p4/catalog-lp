import { Component } from "react";
import { MenuData } from "./data/MenuData";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import MenuIcon from "./assets/images/menu-icon.png";
import "./css/NavBarStyle.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <img src={Logo} alt="logo" style={{ width: 160 }} />
        </Link>
        <Link to="/uml">UML</Link>
        <Link to="/merise">Merise</Link>
      </nav>
    );
  }
}
export default NavBar;
