import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
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
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="/uml">UML</Link>
      <Link to="/merise">Merise</Link>
    </nav>
  );
}

export default NavBar;
