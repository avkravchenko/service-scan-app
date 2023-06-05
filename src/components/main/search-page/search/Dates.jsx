import React from "react";
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DatePicker } from 'antd';
import { useDispatch } from "react-redux";
import { addEndDate, addStartDate } from "../../../../store/actions";


const Dates = () => {
    const { RangePicker } = DatePicker;
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY', 'DD.MM.YYYY', 'DD.MM.YY'];
    const dispatch = useDispatch();
    
    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    }; 

    const handleChanges = (date) => {

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
       
    }

    return (
        <>
            <label htmlFor="dates">Диапазон поиска <span className="req">*</span></label>
            <RangePicker 
                onChange={handleChanges}
                name="dates"
                format={dateFormatList}
                locale={locale}
                disabledDate={disabledDate}
            />
        </>
    )
}

export default Dates;