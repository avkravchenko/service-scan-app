import React from "react";
import Loader from "./result-sections/loader/Loader";
import './results.scss';
import ResultsSlider from "./result-sections/results-slider/ResultsSlider";
import ResultsPosts from "./result-sections/results-posts/ResultsPosts";

const Results = () => {
    return (
        <div className="results-container">
            <Loader />
            <ResultsSlider />
            <ResultsPosts />
        </div>
    )
}

export default Results;