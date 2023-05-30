import React from "react";
import './search-page.scss';
import searchCharacter from '../../../../assets/search-characters.png'
import SearchForm from "./SearchForm";

const SearchPage = () => {
    return (
        <div className="main__search-page">
            <div className="main__search-page__data">
                <h1 className="main__search-page__header">
                    Найдите необходимые <br />
                    данные в пару кликов.
                </h1>
                <p className="main__search-page__text">
                    Задайте параметры поиска. <br />
                    Чем больше заполните, тем точнее поиск
                </p>
                <SearchForm />
            </div>
            <div className="main__search-page__image">
                <img src={searchCharacter} alt="" />
            </div>
        </div>
    )
}

export default SearchPage;