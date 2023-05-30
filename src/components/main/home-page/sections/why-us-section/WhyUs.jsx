import React from "react";
import './whyus.scss';
import SimpleSlider from "../../../../slider/Slider";
import whyUsPicture from '../../../../../assets/why-us-picture.jpg';


const WhyUs = () => {
    return (
        <section className="main__why-us-section">
            <h2 className="main__why-us-section__header">Почему именно мы</h2>       
            <SimpleSlider /> 
            <div className="main__why-us-section__why-us-picture"><img src={whyUsPicture} alt="" /></div>
        </section>
        
    )
}

export default WhyUs;