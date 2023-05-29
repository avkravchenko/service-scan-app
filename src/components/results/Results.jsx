import React from "react";
import Loader from "./result-sections/loader/Loader";
import './results.scss';
import ResultsSlider from "./result-sections/results-slider/ResultsSlider";

const Results = () => {
    return (
        <div className="results-container">
            <Loader />
            <ResultsSlider />
        </div>
    )
}

export default Results;