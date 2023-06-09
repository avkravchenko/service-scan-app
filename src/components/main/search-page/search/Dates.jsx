import React, { useState } from "react";
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DatePicker } from 'antd';
import { useDispatch } from "react-redux";
import { addEndDate, addStartDate, removeEndDate, removeStartDate } from "../../../../store/actions";
import './range-picker.scss';


const Dates = () => {
    //const { RangePicker } = DatePicker;
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY', 'DD.MM.YYYY', 'DD.MM.YY'];
    const dispatch = useDispatch();
    //const [startDate, setStartDate] = useState('')
    //const [endDate, setEndDate] = useState('')
    //console.log(startDate)
    //console.log(endDate)
    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    }; 

/*     const handleChanges = (date) => {

        if (date) {
            const startDateString = date[0].$d;
            const endDateString = date[1].$d;
    
            // Convert start date
            const startDate = new Date(startDateString);
            const startISOString = startDate.toISOString();
            console.log(startISOString); 
            dispatch(addStartDate(startISOString))

    
            // Convert end date
            const endDate = new Date(endDateString);
            const endISOString = endDate.toISOString();
            console.log(endISOString); 
            dispatch(addEndDate(endISOString))
        }
       
    } */

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
            {/* <RangePicker 
                onChange={handleChanges}
                name="dates"
                format={dateFormatList}
                locale={locale}
                disabledDate={disabledDate}
            /> */}
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