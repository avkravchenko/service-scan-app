import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import LogIn from "./LogIn";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <Link to="/"><div className="header__logo"><Logo /></div></Link>
            <nav className="header__navigation">
                <ul className="header__navigation__conteiner">
                    <li>Главная</li>
                    <li>Тарифы</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <LogIn />
        </header>
    )
}

export default Header;