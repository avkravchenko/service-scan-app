import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import './slider.scss';

import time from '../../assets/time.png';
import search from '../../assets/search.png';
import shield from '../../assets/shield.png';



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Display three cards at a time
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768, // Adjust the number of cards for different breakpoints
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SimpleSlider = () => {

  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext(); 
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev(); 
  };

  return (

    <div className="slider1">
      <FontAwesomeIcon onClick={handlePrev} icon={faChevronLeft} 
        style={{
            color: "rgb(121, 121, 121)", 
            transform: 'scale(2)',
            cursor: 'pointer'
        }} 
      />
      <Slider ref={sliderRef} {...settings}>
          <div className="card__wrapper">
              <div className="card">
                  <img src={time} alt="" />
                  <p>Высокая и оперативная скорость обработки заявки</p>
              </div>
          </div>
          <div className="card__wrapper">
              <div className="card">
                  <img src={search} alt="" />
                  <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
              </div>
          </div>
          <div className="card__wrapper">
              <div className="card">
                  <img src={shield} alt="" />
                  <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
              </div>
          </div>
          <div className="card__wrapper">
              <div className="card">
                  <img src={time} alt="" />
                  <p>Высокая и оперативная скорость обработки заявки</p>
              </div>
          </div>
          <div className="card__wrapper">
              <div className="card">
                  <img src={search} alt="" />
                  <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
              </div>
          </div>
          <div className="card__wrapper">
              <div className="card">
                  <img src={shield} alt="" />
                  <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
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
  );
};

export default SimpleSlider;





