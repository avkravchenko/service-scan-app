import React from "react";
import me from '../../assets/me.jpg';
import './user-menu.scss';

const UserMenu = () => {
    return (
        <div className="header__user-menu">
            <div className="header__user-menu__desc">
                <p>Александр К.</p>
                <p>Выйти</p>
            </div>
            <div className="header__user-menu__avatar">
                <img src={me} alt="" />
            </div>
        </div>
    )
}

export default UserMenu;