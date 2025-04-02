import React from "react";
import '../../styles/Header.css';
import logo from '../../assets/baby-born.svg';
import Button from "../common/Button";

const Header = () => {
    return (
        <header className="header main-container">
        <div className="logo">
            {/* <img src={logo} alt="Logo Sweet Dodo" /> */}
            <a href="/"><h1>Sweet Dodo</h1></a>
        </div>
        <nav className="nav">
            <ul className="nav-list">
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À propos</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/Signup"><Button text="Je m'inscris" color="#FF859F" variant="outlined" /></a></li>
                <li><a href="/Signup"><Button text="Connexion" color="#FF859F" variant="filled"/></a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;