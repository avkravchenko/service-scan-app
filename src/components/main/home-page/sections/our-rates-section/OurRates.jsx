import React from "react";
import './our-rates.scss'
import Cards from "./Cards";

const OurRates = () => {
    return (
        <section className="main__our-rates-section">
            <h2 className="main__our-rates-section__header">наши тарифы</h2>
            <Cards />
        </section>
    )
}

export default OurRates;