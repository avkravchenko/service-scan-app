import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import './result-slider.scss';
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9, 
    slidesToScroll: 9,
    responsive: [
      {
        breakpoint: 850, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


const ResultsSlider = () => {
    const sliderRef = useRef(null);

    const handleNext = () => {
      sliderRef.current.slickNext(); 
    };
    const handlePrev = () => {
      sliderRef.current.slickPrev(); 
    };

    return (
        <>
            <h2 className="common-results">Общая сводка</h2>
            <p>Найдено 1488 публикаций</p>
            <div className="slider2">
                <FontAwesomeIcon onClick={handlePrev} icon={faChevronLeft} 
                    style={{
                        color: "rgb(121, 121, 121)", 
                        transform: 'scale(2)',
                        cursor: 'pointer'
                    }} 
                />

                <Slider ref={sliderRef} {...settings}>
                    <div className="slider-header-wrapper">
                        <div className="result-card-header">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                    <div className="slider-common-wrapper">
                        <div className="result-card">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                    </div>                    
                </Slider>

                <FontAwesomeIcon onClick={handleNext} icon={faChevronRight} 
                    style={{
                        color: "rgb(121, 121, 121)", 
                        transform: 'scale(2)',
                        cursor: 'pointer'
                    }} 
                />

               
            </div>
        </>
    )
}

export default ResultsSlider;