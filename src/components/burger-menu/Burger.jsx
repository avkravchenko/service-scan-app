import React, { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu';
import logoFooter from '../../assets/logo-footer.png';
import './burger.scss';
import Btn from '../button-component/Btn';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../../store/actions";

const Burger = () => {
    const token = useSelector(state => state.token)
    const [isClicked, setIsClicked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    const handleClickToLogIn = () => {
        setIsClicked(!isClicked)
    }

    const handleClickToLogOut = () => {
        setIsClicked(false);
        localStorage.removeItem('token');
        dispatch(removeToken());
    }

    const isMenuOpen = function(state) {
        setIsOpen(state.isOpen)
        return state.isOpen;
      };

    return (
        <div className="burger-wrapper">
            <Menu 
                isOpen={isClicked ? false : null} 
                onStateChange={ isMenuOpen }
                itemListElement="div" 
                width={ '100vw' } 
                right
            >
                <div className="burger-logo"><img src={logoFooter} alt="" /></div>
                <li className="menu-item">Главная</li>
                <li className="menu-item">Тарифы</li>
                <li className="menu-item">FAQ</li>
                <div className="burger-login">
                    <p>Зарегистрироваться</p>
                    {token ? 
                        <Link onClick={handleClickToLogOut} to='/service-scan-app'>
                            <Btn className={'burger-log-in'} text={'Выйти'}/>
                        </Link> :
                        <Link onClick={handleClickToLogIn} to='/service-scan-app/authorization'>
                            <Btn className={'burger-log-in'} text={'Войти'}/>
                        </Link>
                    }
                </div>
            </Menu>
        </div>
    );
}

export default Burger;
