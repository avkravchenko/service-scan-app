import React, { useState } from "react";
import './search-form.scss';
import Dates from "./Dates";
import Checks from "./Checks";
import { Input, InputNumber, Select } from 'antd';
import Btn from "../../../button-component/Btn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addINN } from "../../../../store/actions";





const SearchForm = () => {
    
    const [innValue, setInnValue] = useState('');
    const [numValue, setNumValue] = useState();
    const dispatch = useDispatch()
    const startDate = useSelector(state => state.formData.issueDateInterval.startDate)



    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setInnValue(numericValue);
        dispatch(addINN(numericValue))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('heh')
    }

    const handleSelectChange = (value) => {
        console.log(value)
    }

    const handleNumberChange = (event) => {
        const number = event.target.value.replace(/[^0-9]/g, '');
        setNumValue(number)
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
                        { value: 'любая', label: 'Любая' },
                        { value: 'позитивная', label: 'Позитивная' },
                        { value: 'негативная', label: 'Негативная' }
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
                <Link style={{alignSelf: 'flex-end'}} to='/search/results'><Btn className={'self-align-btn'} text={'Поиск'}/></Link>
            </div>
        </form>
    )
}

export default SearchForm;