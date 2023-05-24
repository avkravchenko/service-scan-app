import React from "react";
import { Link } from "react-router-dom";



const LogIn = () => {
    return (
        <div className="header__login-container">
            <button className="header__login-container__singin-btn">Зарегистрироваться</button>
            <div className="line"></div>
            <Link to='/authorization'>
                <button className="header__login-container__login-btn"><strong>Войти</strong></button>
            </Link>
        </div>
    )
}

export default LogIn;