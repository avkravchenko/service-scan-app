import React, { useState } from "react";
import Btn from "../button-component/Btn";
import './auth-form.scss';
import { ReactComponent as Google } from '../../assets/google-btn.svg';
import { ReactComponent as Facebook } from '../../assets/facebook-btn.svg';
import { ReactComponent as Yandex } from '../../assets/yandex-btn.svg';
import { ReactComponent as Lock } from '../../assets/lock.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToken } from "../../store/actions";



const AuthForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const [inputsValue, setInputsValue] = useState({
        login: '',
        password: ''
    })

    console.log(inputsValue)

    const handleSubmit = (e) => {
        e.preventDefault()

            axios
            .post('https://gateway.scan-interfax.ru/api/v1/account/login', inputsValue, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => {
              localStorage.setItem('token', response.data.accessToken)
              response.data.accessToken && navigate('/')
              dispatch(addToken(response.data.accessToken))
            })
            .catch((error) => {
              console.error(error);
              setError('Неправильный логин и/или пароль')
            });
    }

    const handleChange = (e) => {
        setInputsValue({
            ...inputsValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-header">
                <button className="form-header__log-in">Войти</button>
                <button className="form-header__sign-up">Зарегистрироваться</button>
            </div>
            <div className="inputs-area">
                <label htmlFor="text">Логин или номер телефона:</label>
                <input onChange={handleChange} className='inputs-area__input' name="login" type="text" />
                <label htmlFor="password">Пароль:</label>
                <input onChange={handleChange} className='inputs-area__input' name="password" type="password" />
                <span style={{color: 'red'}}>{error}</span>
                <Btn 
                    isDisabled={ inputsValue.login === '' || inputsValue.password === '' } 
                    text={'Войти'} 
                />
                <button className="inputs-area__password-recovery">Восстановить пароль</button>
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

export default AuthForm;