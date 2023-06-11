import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import "slick-carousel/slick/slick-theme.css";
import './result-slider.scss';
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import dayjs from 'dayjs';
import 'dayjs/locale/en'; 
import { Spin } from "antd";


const ResultsSlider = () => {
  const [quantity, setQuantity] = useState();
  const [amountOfitems, setAmountOfitems] = useState();
  const searchFormResponse = useSelector(state => state.searchFormResponse);
  const [isLoading, setIsLoading] = useState(true); 

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: amountOfitems === 1 ? 2 : (amountOfitems < 10 && amountOfitems % 2 === 0 ? 2 : 4),
    slidesToScroll: 1,
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

  useEffect(() => {
    if (searchFormResponse && searchFormResponse.data && searchFormResponse.data[0] && Object.keys(searchFormResponse.data[0].data).length !== 0) {
      console.log('obj contains something');
      let items = 0;
      let summ = 0;
      searchFormResponse.data[0].data.map(item => {
        summ += item.value;
        items += 1
      });
      setQuantity(summ);
      setAmountOfitems(items)
      setIsLoading(false)
    }
  }, [searchFormResponse]);
  


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
      {searchFormResponse && searchFormResponse.data && searchFormResponse.data.length > 0 ? (
        <p>Найдено {quantity} публикаций</p>
      ) : null}

      {isLoading ? (
       <>{searchFormResponse && searchFormResponse.data && searchFormResponse.data.length > 0 ? <Spin/> : (
        <p>Данные не найдены, попробуйте использовать другие параметры поиска</p>
      )}</>
      ) : (
        <>
          {searchFormResponse && searchFormResponse.data && searchFormResponse.data.length > 0 && (
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
                {searchFormResponse.data[0].data.map((item, index) => {
                  const convertedDate = dayjs(item.date).format('DD.MM.YYYY');
                  return (
                    <div key={uuid()} className="slider-common-wrapper">
                      <div className="result-card">
                        <p>{convertedDate}</p>
                        <p>{item.value}</p>
                        <p>{searchFormResponse.data[1].data[index].value}</p>
                      </div>
                    </div>
                  )
                })}
              </Slider>

              <FontAwesomeIcon onClick={handleNext} icon={faChevronRight}
                style={{
                  color: "rgb(121, 121, 121)",
                  transform: 'scale(2)',
                  cursor: 'pointer'
                }}
              />
            </div>
          ) }
        </>
      )}
    </>
  )
}

export default ResultsSlider;
