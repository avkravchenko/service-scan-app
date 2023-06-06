import React, { useState } from "react";
import './search-form.scss';
import Dates from "./Dates";
import Checks from "./Checks";
import { Input, InputNumber, Select } from 'antd';
import Btn from "../../../button-component/Btn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addINN, addLimit, addSearchFormResponse, addTonality } from "../../../../store/actions";
import axios from 'axios';




const SearchForm = () => {
    
    const [innValue, setInnValue] = useState('');
    const [numValue, setNumValue] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formData = useSelector(state => state.formData)
    const token = useSelector(state => state.token);

    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setInnValue(numericValue);
        dispatch(addINN(numericValue))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('heh')
        if (token && formData) {
            axios
            .post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                navigate('/search/results')
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    const handleSelectChange = (value) => {
        console.log(value)
        dispatch(addTonality(value))
    }

    const handleNumberChange = (event) => {
        const number = event.target.value.replace(/[^0-9]/g, '');
        setNumValue(number)
        dispatch(addLimit(+number))
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className="search-form__inputs">
                <label htmlFor="inn">ИНН компании <span className="req">*</span></label>
                <Input 
                    autoComplete="off"
                    status={(innValue.length > 10) ? 'error' : null}
                    className="all-type-of-inputs"
                    name="inn"
                    onChange={handleInputChange}
                    placeholder="10 цифр"
                    value={innValue}
                />
                {innValue.length > 10 ? <p style={{color: 'red', margin: 0}}>Вы ввели более 10 цифр</p> : null}


                <label htmlFor="mood">Тональность</label>
                <Select 
                    className="all-type-of-inputs"
                    name="mood" 
                    onChange={handleSelectChange}
                    options={[
                        { value: 'any', label: 'Любая' },
                        { value: 'positive', label: 'Позитивная' },
                        { value: 'negative', label: 'Негативная' }
                    ]}
                />

                <label htmlFor="quantity">Количество документов в выдаче <span className="req">*</span></label>
                <Input
                    autoComplete="off"
                    status={(numValue < 1 || numValue > 1000) && numValue ? 'error' : null}
                    className="all-type-of-inputs"
                    onChange={handleNumberChange}
                    name="quantity"
                    value={numValue}
                    placeholder="От 1 до 1000"
                />
                 {(numValue < 1 || numValue > 1000) && numValue ? <p style={{color: 'red', margin: 0}}>Введите корректное число</p> : null}
                <Dates />
            </div>
            <div className="search-form__checks">
                <Checks />
            </div>
            <div className="search-form__btn__wrapper">
                {/* <Link style={{alignSelf: 'flex-end'}} to='/search/results'><Btn onClick={handleSubmit} className={'self-align-btn'} text={'Поиск'}/></Link> */}
                <Btn onClick={handleSubmit} className={'self-align-btn'} text={'Поиск'}/>
            </div>
        </form>
    )
}

export default SearchForm;