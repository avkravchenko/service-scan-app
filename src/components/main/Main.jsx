import React from "react";
import './main.scss';
import LeadSection from "./sections/LeadSection";
import WhyUs from "./sections/WhyUs";
import OurRates from "./sections/OurRates";

const Main = () => {
    return (
        <main className="main">
            <LeadSection />
            <WhyUs />
            <OurRates />
        </main>
        
    )
}

export default Main;