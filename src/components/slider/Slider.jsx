import React from "react";
import Slider from "react-slick";
import './slider.scss';
import './arrows.scss';

import time from '../../assets/time.png';
import search from '../../assets/search.png';
import shield from '../../assets/shield.png';



import "slick-carousel/slick/slick-theme.css";






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
  return (
    <Slider {...settings}>
        <div>
            <div className="card">
                <img src={time} alt="" />
                <p>Высокая и оперативная скорость обработки заявки</p>
            </div>
        </div>
        <div>
            <div className="card">
                <img src={search} alt="" />
                <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
            </div>
        </div>
        <div>
            <div className="card">
                <img src={shield} alt="" />
                <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
            </div>
        </div>
        <div>
            <div className="card">
                <img src={time} alt="" />
                <p>Высокая и оперативная скорость обработки заявки</p>
            </div>
        </div>
        <div>
            <div className="card">
                <img src={search} alt="" />
                <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
            </div>
        </div>
        <div>
            <div className="card">
                <img src={shield} alt="" />
                <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
            </div>
        </div>
        
      </Slider>
  );
};

export default SimpleSlider;





