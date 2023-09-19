import { Component } from "react";
import { MenuData } from "./MenuData";
import Logo from "../assets/images/logo.png";
import MenuIcon from "./assets/images/menu-icon.png";
import "./css/NavBarStyle.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <img src={Logo} alt="logo" style={{ width: 160 }} />
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <li>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default NavBar;
