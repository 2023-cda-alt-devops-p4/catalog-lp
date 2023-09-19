import { Component } from "react";
import Logo from '../assets/images/logo.png'
import { MenuData } from "./MenuData";
import "./css/NavBarStyle.css"

class NavBar extends Component {
    render(){
        return (
        <nav className="NavbarItems">
            <img src={Logo} alt="logo" style={{width: 160}}/>
            <ul className="nav-menu">
                <li>
                    {MenuData.map((item, index) => {
                        return(
                            <li>
                                <a href={item.url} className={item.cName}>{item.title}</a>
                            </li>
                        )
                    } )}
                </li>
            </ul>
        </nav>
        )
    }
}
export default NavBar;