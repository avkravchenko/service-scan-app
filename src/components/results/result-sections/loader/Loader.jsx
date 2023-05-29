import React from "react";
import resultsImg from '../../../../assets/results-human.png';
import './loader.scss';


const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-container__text-block">
                <h1 className="loader-container__text-block__header">Ищем. Скоро будут результаты</h1>
                <p className="loader-container__text-block__desc">Поиск может занять некоторое время, просим сохранять терпение.</p>
            </div>
            <div className="loader-container__image">
                <img src={resultsImg} alt="" />
            </div>
        </div>
    )
}

export default Loader;