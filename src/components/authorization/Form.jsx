import React from "react";
import Btn from "../Btn";
import './form.scss';
import { ReactComponent as Google } from '../../assets/google-btn.svg';
import { ReactComponent as Facebook } from '../../assets/facebook-btn.svg';
import { ReactComponent as Yandex } from '../../assets/yandex-btn.svg';
import { ReactComponent as Lock } from '../../assets/lock.svg';
import lock from '../../assets/lock.png';

const Form = () => {
    return (
        <form className="form">
            <div className="form-header">
                <button className="form-header__log-in">Войти</button>
                <button className="form-header__sign-up">Зарегистрироваться</button>
            </div>
            <div className="inputs-area">
                <label htmlFor="text">Логин или номер телефона:</label>
                <input className='inputs-area__input' name="text" type="text" />
                <label htmlFor="password">Пароль:</label>
                <input className='inputs-area__input' name="password" type="password" />
                <Btn text={'Войти'} />
                <a className="inputs-area__password-recovery" href="#">Восстановить пароль</a>
                <p className="login-with-label">Войти через:</p>
                <div className="login-with">
                    <button className="login-with__btn"><Google style={{display: 'block'}}/></button>
                    <button className="login-with__btn"><Facebook style={{display: 'block'}}/></button>
                    <button className="login-with__btn"><Yandex style={{display: 'block'}}/></button>
                </div>
            </div>
            <Lock className="lock"/>
        </form>
    )
}

export default Form;