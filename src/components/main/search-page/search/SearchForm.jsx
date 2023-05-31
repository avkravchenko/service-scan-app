import React, { useState } from "react";
import './search-form.scss';
import Dates from "./Dates";
import Checks from "./Checks";
import { Input } from 'antd';
import Btn from "../../../button-component/Btn";
import { Link } from "react-router-dom";




const SearchForm = () => {
    const [value, setValue] = useState('');
    const [isSub, setIsSub] = useState(true)

    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(numericValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('heh')
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className="search-form__inputs">
                <label htmlFor="inn">ИНН компании <span className="req">*</span></label>
                <Input 
                    autoComplete="off"
                    status={(value.length > 10) ? 'error' : null}
                    className="all-type-of-inputs"
                    name="inn"
                    onChange={handleInputChange}
                    placeholder="10 цифр"
                    value={value}
                />
                {value.length > 10 ? <p style={{color: 'red', margin: 0}}>Вы ввели более 10 цифр</p> : null}


                <label htmlFor="mood">Тональность</label>
                <select 
                    className="all-type-of-inputs"
                    name="mood" 
                >
                    <option value="любая">любая</option>
                    <option value="позитивная">позитивная</option>
                    <option value="негативная">негативная</option>
                </select>

                <label htmlFor="quantity">Количество документов в выдаче <span className="req">*</span></label>
                <input 
                    autoComplete="off"
                    className="all-type-of-inputs"
                    type="number"
                    name="quantity"
                    min="1"
                    max="1000" 
                    placeholder="От 1 до 1000"
                />
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