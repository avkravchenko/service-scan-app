import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import Burger from "../burger-menu/Burger";
import UserInfo from "../user-info/UserInfo";
import { useSelector } from "react-redux";
import UserMenu from "../user-menu/UserMenu";



const Header = () => {
    const token = useSelector(state => state.token)

    return (
        <header>
            <div className="header">
                <Link to="/"><div className="header__logo"><Logo /></div></Link>
                <nav className="header__navigation">
                    <ul className="header__navigation__conteiner">
                        <li>Главная</li>
                        <li>Тарифы</li>
                        <li>FAQ</li>
                    </ul>
                </nav>
                <UserInfo/>
                {token ? <UserMenu /> : <LogIn />}
                <Burger />
            </div>
        </header>
    )
}

export default Header;