import { useRef } from "react";
import {FaTimes, FaBars} from "react-icons/fa";
import "../Styles/Navbar.css"
import logo from "../Images/chefhatvro.webp"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header>
            <img className = "logo"  src = {logo}></img>
            <nav ref = {navRef}>
                <a href = "/#">Find a Recipe!</a>
                <a href = "/#">Saved Recipes</a>
                <button className = "nav-btn nav-close-btn" onClick = {showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className = "nav-btn" onClick = {showNavbar}>
                <FaBars />
            </button>

        </header>
    );
}

export default Navbar;
