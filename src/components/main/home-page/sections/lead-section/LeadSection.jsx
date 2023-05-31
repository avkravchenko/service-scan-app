import React from "react";
import '../../../../button-component/btn.scss';
import Btn from "../../../../button-component/Btn";
import { Link } from 'react-router-dom';
import leadPageImage from '../../../../../assets/content-illustration1.jpg';
import './lead-section.scss';

const LeadSection = () => {
    return (
        <section className="main__description-section">
        <div className="main__description-section__description">
            <h1 className="main__description-section__description__header">сервис по поиску <br/>
            публикаций <br/>
            о компании <br/>
            по его ИНН</h1>
            <p className="main__description-section__description__desc">Комплексный анализ публикаций, получение данных <br/> в формате PDF на электронную почту.</p>
            <Link className="main__description-section__description__btn-wrapper" to='/search'><Btn text={'Запросить данные'}/></Link>
        </div>
        <div className="main__description-section__description__image__wrapper">
            <img src={leadPageImage} className="main__description-section__description__image__wrapper__lead-page-image" />
        </div>
    </section>
    )
}

export default LeadSection;