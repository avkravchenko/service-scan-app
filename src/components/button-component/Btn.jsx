import React from "react";
import './btn.scss';

const Btn = ({isDisabled ,text, className}) => {
    return (
        <button disabled={isDisabled ? 'disabled' : undefined} 
            className={`btn ${className ? className : ''} ${isDisabled ? 'disabled' : ''}`}>{text}</button>
    )
}

export default Btn;