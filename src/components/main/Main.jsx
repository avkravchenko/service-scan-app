import React from "react";
import './main.scss';
import LeadSection from "./home-page/sections/lead-section/LeadSection";
import WhyUs from "./home-page/sections/why-us-section/WhyUs";
import OurRates from "./home-page/sections/our-rates-section/OurRates";

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