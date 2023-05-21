import React from "react";
import Card from "./Card";
import './cards.scss';
import uuid from 'react-uuid';

const Cards = () => {

    const cards = [
        {
            id: 1,
            selected: true,
            header: 'Beginner',
            headerDesc: 'Для небольшого исследования',
            actualPrice: '799 ₽',
            prevPrice: '1 200 ₽',
            rateDesc: 'или 150 ₽/мес. при рассрочке на 24 мес.',
            rateList: [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7'
            ]
        },
        {
            id: 2,
            selected: false,
            header: 'Pro',
            headerDesc: 'Для HR и фрилансеров',
            actualPrice: '1 299 ₽',
            prevPrice: '2 600 ₽',
            rateDesc: 'или 279 ₽/мес. при рассрочке на 24 мес.',
            rateList: [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7'
            ]
        },
        {
            id: 3,
            selected: false,
            header: 'Business',
            headerDesc: 'Для корпоративных клиентов',
            actualPrice: '2 379 ₽',
            prevPrice: '3 700 ₽',
            rateDesc: false,
            rateList: [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7'
            ]
        }
    ]

    return (
        <div className="main__our-rates-section__cards-container">
            {cards.map(card => 
                <Card key={uuid()}
                    header={card.header}
                    headerDesc={card.headerDesc}
                    actualPrice={card.actualPrice}
                    prevPrice={card.prevPrice}
                    rateDesc={card.rateDesc}
                    rateList={card.rateList}
                    cardId={card.id}
                    selected={card.selected}
                />
            )}
        </div>
    )
}

export default Cards;