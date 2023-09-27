import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { RiMoonFill, RiMenu3Fill } from "react-icons/ri";
import "./css/NavBarStyle.css";

function NavBar() {
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setZoomOut(true);
      } else {
        setZoomOut(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`NavbarItems ${zoomOut ? "zoom-out" : ""}`}>
      <button className="btn-menu">
        <RiMenu3Fill className="icon-btn-menu" />
      </button>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="link-page">
        <Link to="/uml">UML</Link>
        <Link to="/merise">Merise</Link>
      </div>
      <div className="link-menu-burger">
        <Link to="/uml">UML</Link>
        <Link to="/merise">Merise</Link>
      </div>
      <button className="dark-mode">
        <RiMoonFill className="icon-dark-mode" />
        <p>Dark Mode</p>
      </button>
    </nav>
  );
}

export default NavBar;
