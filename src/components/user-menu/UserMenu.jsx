import React from "react";
import me from '../../assets/me.jpg';
import './user-menu.scss';
import { removeToken } from "../../store/actions";
import { useDispatch } from "react-redux";


const UserMenu = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        localStorage.removeItem('token')
        dispatch(removeToken())
    }

    return (
        <div className="header__user-menu">
            <div className="header__user-menu__desc">
                <p>Александр К.</p>
                <p onClick={handleClick}>Выйти</p>
            </div>
            <div className="header__user-menu__avatar">
                <img src={me} alt="" />
            </div>
        </div>
    )
}

export default UserMenu;