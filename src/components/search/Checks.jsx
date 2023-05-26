import React from "react";
import { Checkbox } from 'antd';

const Checks = () => {
    
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
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