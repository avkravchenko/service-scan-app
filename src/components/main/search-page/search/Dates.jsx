import React, { useState } from "react";
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DatePicker } from 'antd';
import { useDispatch } from "react-redux";
import { addEndDate, addStartDate, removeEndDate, removeStartDate } from "../../../../store/actions";
import './range-picker.scss';


const Dates = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY', 'DD.MM.YYYY', 'DD.MM.YY'];
    const dispatch = useDispatch();
    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    }; 

    const handleStartDateChanges = (date) => {
        if (date) {
            dispatch(addStartDate(date.$d.toISOString()))
        } else {
            dispatch(removeStartDate())
        }
    }
    
    const handleEndDateChanges = (date) => {
        if (date) {
            dispatch(addEndDate(date.$d.toISOString()))
        } else {
            dispatch(removeEndDate())
        }
    }
    return (
        <>
            <label htmlFor="dates">Диапазон поиска <span className="req">*</span></label>

           <div className="date-picker-container">
                <DatePicker 
                    onChange={handleStartDateChanges}
                    name="dates"
                    format={dateFormatList}
                    locale={locale}
                    disabledDate={disabledDate}
                     />
                <DatePicker 
                    onChange={handleEndDateChanges} 
                    format={dateFormatList}
                    locale={locale}
                    disabledDate={disabledDate}
                    />
           </div>
        </>
    )
}

export default Dates;