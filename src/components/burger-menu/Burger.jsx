import React, { useEffect, useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import logoFooter from '../../assets/logo-footer.png';
import './burger.scss';
import Btn from '../button-component/Btn';
import { Link } from "react-router-dom";

const Burger = () => {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
            <div className="burger-wrapper">
                <Menu isOpen={isClicked ? false : null} itemListElement="div" width={ '100vw' } right>
                    <div className="burger-logo"><img src={logoFooter} alt="" /></div>
                    <li className="menu-item">Главная</li>
                    <li className="menu-item">Тарифы</li>
                    <li className="menu-item">FAQ</li>
                    <div className="burger-login">
                        <p>Зарегистрироваться</p>
                        <Link onClick={handleClick} to='/authorization'><Btn className={'burger-log-in'} text={'Войти'}/></Link>
                    </div>
                </Menu>
            </div>
    )
}

export default Burger;