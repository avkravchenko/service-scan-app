import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import "slick-carousel/slick/slick-theme.css";
import './result-slider.scss';
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import axios from "axios";
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Import the locale you want to use




const ResultsSlider = () => {
    const token = useSelector(state => state.token)
    const formData = useSelector(state => state.formData)
    const [quantity, setQuantity] = useState()
    const dispatch = useDispatch();
    const searchFormResponse = useSelector(state => state.searchFormResponse)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: (searchFormResponse && searchFormResponse.data.length > 0 && searchFormResponse.data[0].data.length < 10 ) ?  2 : 4, 
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
        if (formData)
          {  axios
            .post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {
                    if (Object.keys(response.data.data).length !== 0) {
                        console.log('obj is contain something')
                        let summ = 0;
                        response.data.data[0].data.map(item => {
                            summ += item.value
                        })
                        setQuantity(summ)
                        
                    } else (
                        console.log('obj is not contain something')
                    )
                })
                .catch((error) => {
                    console.error(error);
                });}

    }, [])

    
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
            {searchFormResponse.data.length > 0 ? <p>Найдено {quantity} публикаций</p> : null}

            {searchFormResponse.data.length > 0 ? (<div className="slider2">
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
                    {searchFormResponse && searchFormResponse.data && searchFormResponse.data[0].data.map((item, index) => {
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

               
            </div>) : 
            <p>Данные не найдены</p>
            }
            
        </>
    )
}

export default ResultsSlider;