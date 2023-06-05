import React, { useEffect, useState } from "react";
import { Checkbox } from 'antd';
import { useDispatch } from "react-redux";
import { toggleIsBusinessNews, toggleMaxFullness } from "../../../../store/actions";

const Checks = () => {
    const [checkedArray, setCheckedArray] = useState()
    const dispatch = useDispatch();
    useEffect(() => {
        if (checkedArray) {
            const maxFullnessBool = checkedArray.includes('Признак максимальной полноты');
            dispatch(toggleMaxFullness(maxFullnessBool))

            const inBusinessNewsBool = checkedArray.includes('Упоминания в бизнес-контексте');
            dispatch(toggleIsBusinessNews(inBusinessNewsBool))
        }
        
    }, [checkedArray])
    
    const onChange = (checkedValues) => {
        
        setCheckedArray(checkedValues)
    }



    const plainOptions = [
        'Признак максимальной полноты',
        'Упоминания в бизнес-контексте', 
        'Главная роль в публикации',
        'Публикации только с риск-факторами',
        'Включать технические новости рынков',
        'Включать анонсы и календари',
        'Включать сводки новостей'
    ];
  

    return (
        <>
            <Checkbox.Group 
                className="checkbox-group"
                options={plainOptions}
                defaultValue={['Apple']} 
                onChange={onChange} 
            />
        </>
    )
}

export default Checks;