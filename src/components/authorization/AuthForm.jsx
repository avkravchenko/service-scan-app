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
import { addExpireDate, addToken } from "../../store/actions";
import { Button } from "antd";



const AuthForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const [inputsValue, setInputsValue] = useState({
        login: '',
        password: ''
    })

    const handleSubmit = (e) => {
        setLoading(true)
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
              localStorage.setItem('expire', response.data.expire)
              response.data.accessToken && navigate('/service-scan-app')
              dispatch(addToken(response.data.accessToken))
              dispatch(addExpireDate(response.data.expire))
              setLoading(false)
            })
            .catch((error) => {
              console.error(error);

              if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
              } else {
                setError('Неправильный логин и/или пароль')
              }
              
              setLoading(false)
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
                <label htmlFor="login">Логин или номер телефона:</label>
                <input onChange={handleChange} className='inputs-area__input' id="login" name="login" type="text" />
                <label htmlFor="password">Пароль:</label>
                <input onChange={handleChange} className='inputs-area__input' id="password" name="password" type="password" />
                <span style={{color: 'red'}}>{error}</span>
                
                <Button 
                    loading={loading} 
                    onClick={handleSubmit} 
                    type="primary" 
                    disabled={ inputsValue.login === '' || inputsValue.password === '' }>
                        Войти
                </Button>

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