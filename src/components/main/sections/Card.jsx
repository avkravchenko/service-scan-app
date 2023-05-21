import React from "react";
import uuid from "react-uuid";
import { ReactComponent as Lamp } from "../../../assets/light-bulb.svg";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import { ReactComponent as Laptop } from "../../../assets/laptop.svg";

const Card = (props) => {
    
    const header = props.header;
    const headerDesc = props.headerDesc;
    const actualPrice = props.actualPrice;
    const prevPrice = props.prevPrice;
    const rateDesc = props.rateDesc;
    const rateList = props.rateList;
    const cardId = props.cardId;

    const orange = "main__our-rates-section__cards-container__card__header-beginner";
    const blue = "main__our-rates-section__cards-container__card__header-pro";
    const black = "main__our-rates-section__cards-container__card__header-business";

    return (
        <div className="main__our-rates-section__cards-container__card">
            <div className={cardId === 1 ? orange : (cardId === 3 ? black : blue)}>
                <div>
                    <h3>{header}</h3>
                    <p>{headerDesc}</p>
                </div>
                {cardId === 1 ? <Lamp /> : (cardId === 3 ? <Laptop /> : <Arrow />)}
            </div>

            <div className="main__our-rates-section__cards-container__card__price">
                <span className="main__our-rates-section__cards-container__card__price__actual">{actualPrice}</span>
                <span className="main__our-rates-section__cards-container__card__price__prev">{prevPrice}</span>
                {!rateDesc ? <p><br /></p> : <p>{rateDesc}</p>}
                
            </div>

            <div className="main__our-rates-section__cards-container__card__rate-info">
                В тариф входит:
                <ul>
                    {rateList.map(list => <li key={uuid()}>{list}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Card;