import React, { useState } from "react";
import './search-form.scss';
import Dates from "./Dates";
import Checks from "./Checks";
import { Button, Input, InputNumber, Select } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addINN, addLimit, addSearchFormIds, addSearchFormResponse, addTonality, removeEndDate, removePosts, removeStartDate } from "../../../../store/actions";
import axios from 'axios';
import dayjs from 'dayjs';

const SearchForm = () => {
    const startDate = useSelector(state => state.formData.issueDateInterval.startDate)
    const endDate = useSelector(state => state.formData.issueDateInterval.endDate)
    const [innValue, setInnValue] = useState('');
    const [numValue, setNumValue] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formData = useSelector(state => state.formData)
    const token = useSelector(state => state.token);
    const [loading, setLoading] = useState(false)

    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setInnValue(numericValue);
        dispatch(addINN(numericValue))
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

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
                setLoading(false)
                dispatch(addSearchFormResponse(response.data))

            })
            .catch((error) => {
                console.error(error);
            });

            axios
            .post('https://gateway.scan-interfax.ru/api/v1/objectsearch', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {
                        dispatch(addSearchFormIds(response.data)) 
                    })
                .catch((error) => {
                    console.error(error);
                });

                dispatch(removeStartDate()) 
                dispatch(removeEndDate())
        }
    }

    const handleSelectChange = (value) => {
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
                    id="inn"
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
                    id="mood"
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
                    id="quantity"
                />
                 {(numValue < 1 || numValue > 1000) && numValue ? <p style={{color: 'red', margin: 0}}>Введите корректное число</p> : null}
                <Dates />

                {startDate && endDate && dayjs(startDate).isAfter(dayjs(endDate)) && 
                <p style={{color: 'red', margin: 0}}>Введите корректные данные</p>}

            </div>
            <div className="search-form__checks">
                <Checks />
            </div>
            <div className="search-form__btn__wrapper">
                <Button 
                    disabled={!innValue || !numValue || !startDate || !endDate}
                    loading={loading} 
                    className={'self-align-btn'} 
                    type="primary"
                    onClick={handleSubmit}>Поиск</Button>
            </div>
        </form>
    )
}

export default SearchForm;