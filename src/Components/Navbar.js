import { useRef } from "react";
import {FaTimes, FaBars} from "react-icons/fa";
import "../Styles/Navbar.css"
import logo from "../Images/chefhatvro.webp"
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const { logout } = useAuth0();

    return(
        <header>
            <img className = "logo"  src = {logo}></img>
            <nav ref = {navRef}>
                <a href = "/#">Find a Recipe!</a>
                <a href = "/#">Saved Recipes</a>
                <button className = "logout" onClick = {() => logout()}>
                    Log Out
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
