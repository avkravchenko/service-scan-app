import React from "react";
import '../btn.scss';

const Btn = ({text, className}) => {
    return (
        <button className={`btn ${className}`}>{text}</button>
    )
}

export default Btn;