import React from "react";
import characters from '../../assets/Characters-with-keys.png';
import './auth.scss';
import Form from "./Form";

const Auth = () => {
    return (
        <div className="main-auth">
            <div className="main-auth__desc">
                <h1 className="main-auth__desc__header">
                    Для оформления подписки <br />
                    на тариф, необходимо <br />
                    авторизоваться.
                </h1>
                <div>
                    <img src={characters} alt="" />
                </div>
            </div>
            <div className="main-auth__form">
                <Form />
            </div>
        </div>
    )
}

export default Auth;