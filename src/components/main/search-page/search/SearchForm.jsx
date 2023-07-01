import { useForm } from "react-hook-form";
import React from "react";
import './search-form.scss';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DatePicker, Button } from 'antd';
import './range-picker.scss';



const SearchForm = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY', 'DD.MM.YYYY', 'DD.MM.YY'];
    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    }; 
    const form = useForm();

    return (
        <form className="search-form">
            <div className="search-form__inputs">
                <label htmlFor="inn">ИНН компании <span className="req">*</span></label>
                <input 
                    autoComplete="off"
                    className="all-type-of-inputs"
                    placeholder="10 цифр"
                    type="text"
                    name="inn" 
                    id="inn" />

                <label htmlFor="tonality">Тональность</label>
                <select 
                    className="all-type-of-inputs"
                    name="tonality"
                    id="tonality">
                        <option value="any">Любая</option>
                        <option value="negative">Негативная</option>
                        <option value="positive">Позитивная</option>
                </select>

                <label htmlFor="limit">Количество документов в выдаче <span className="req">*</span></label>
                <input 
                    className="all-type-of-inputs"
                    placeholder="От 1 до 1000"
                    type="text"
                    name="limit" 
                    id="limit" />

                <label htmlFor="dates">Диапазон поиска <span className="req">*</span></label>
                <div className="date-picker-container">
                    <DatePicker 
                        className="all-type-of-inputs"
                        name="dates"
                        format={dateFormatList}
                        locale={locale}
                        disabledDate={disabledDate}
                        />
                    <DatePicker 
                        className="all-type-of-inputs"
                        format={dateFormatList}
                        locale={locale}
                        disabledDate={disabledDate}
                        />
                </div>
                <div className="search-form__btn__wrapper">
                <Button className='self-align-btn' type="primary">Поиск</Button>
            </div>
            </div>
        </form>
    )
}

export default SearchForm;