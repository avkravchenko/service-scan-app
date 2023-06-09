import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import logoFooter from '../../assets/logo-footer.png';
import './burger.scss';
import Btn from '../button-component/Btn';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeToken } from "../../store/actions";
import { useDispatch } from "react-redux";

const Burger = () => {
    const token = useSelector(state => state.token)
    const [isClicked, setIsClicked] = useState(false)
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleClickToLogOut = () => {
        setIsClicked(!isClicked)
        localStorage.removeItem('token')
        dispatch(removeToken())
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
                        {token ? 
                            <Link onClick={handleClickToLogOut} to='/'> <Btn className={'burger-log-in'} text={'Выйти'}/> </Link> :
                            <Link onClick={handleClick} to='/authorization'><Btn className={'burger-log-in'} text={'Войти'}/></Link>}
                    </div>
                </Menu>
            </div>
    )
}

export default Burger;
