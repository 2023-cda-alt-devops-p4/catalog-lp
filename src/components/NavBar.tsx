import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/images/logo.png";
import LogoDark from "../assets/images/logoo.png";
import { RiMoonFill, RiMenu3Fill, RiSunLine } from "react-icons/ri";
import "./css/NavBarStyle.css";
import { IThemeContext, ThemeContext } from "../context/ThemeProvider";

function NavBar() {
  const [zoomOut, setZoomOut] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const { theme, HandleTheme } = useContext<IThemeContext>(ThemeContext);

  const handleShowLink = () => {
    setShowLink((prevState) => !prevState);
  };

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

  const isLight = theme === "light";

  return (
    <nav
      className={`NavbarItems ${zoomOut && "zoom-out"} ${
        theme === "dark" && "dark"
      }`}
    >
      <button className="btn-menu" onClick={handleShowLink}>
        {isLight ? (
          <RiMenu3Fill color="#000" className="icon-btn-menu" />
        ) : (
          <RiMenu3Fill color="#FFF" className="icon-btn-menu" />
        )}
      </button>
      <Link to="/">
        <img src={theme === "light" ? LogoLight : LogoDark} alt="logo" />
      </Link>
      <div className="link-page">
        <Link to="/uml">UML</Link>
        <Link to="/merise">Merise</Link>
      </div>
      <div
        className={`link-menu-burger ${
          !showLink ? "link-menu-burger" : " link-menu-burger active"
        }`}
      >
        <Link to="/uml" onClick={() => setShowLink((prevState) => !prevState)}>
          UML
        </Link>
        <Link
          to="/merise"
          onClick={() => setShowLink((prevState) => !prevState)}
        >
          Merise
        </Link>
      </div>
      <button className="dark-mode" onClick={HandleTheme}>
        {isLight ? (
          <RiMoonFill color="#844d1c" className="icon-dark-mode" />
        ) : (
          <RiSunLine color="#fff0e3" className="icon-dark-mode" />
        )}

        <p className={isLight ? "" : "dark"}>
          {isLight ? "Dark Mode" : "Light Mode"}
        </p>
      </button>
    </nav>
  );
}

export default NavBar;
