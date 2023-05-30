import React from "react";
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DatePicker } from 'antd';

const Dates = () => {
    const { RangePicker } = DatePicker;
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY', 'DD.MM.YYYY', 'DD.MM.YY'];
    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    }; 

    

    const handleChanges = (e) => {
        let date = e;
        
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