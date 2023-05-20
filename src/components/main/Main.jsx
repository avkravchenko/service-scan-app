import React from "react";
import './main.scss';
import LeadSection from "./sections/LeadSection";
import WhyUs from "./sections/WhyUs";

const Main = () => {
    return (
        <main className="main">
            <LeadSection />
            <WhyUs />
        </main>
        
    )
}

export default Main;