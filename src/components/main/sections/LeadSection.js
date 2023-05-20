import React from "react";
import { ReactComponent as Human } from "../../../assets/content-illustration1.svg";
import '../../../btn.scss';

const LeadSection = () => {
    return (
        <section className="main__description-section">
        <div className="main__description-section__description">
            <h1 className="main__description-section__description__header">сервис по поиску <br/>
            публикаций <br/>
            о компании <br/>
            по его ИНН</h1>
            <p className="main__description-section__description__desc">Комплексный анализ публикаций, получение данных <br/> в формате PDF на электронную почту.</p>
            <button className="btn">Запросить данные</button>
        </div>
        <div className="main__description-section__description__human-vector"><Human className="main__description-section__description__human-vector" /></div>
    </section>
    )
}

export default LeadSection;