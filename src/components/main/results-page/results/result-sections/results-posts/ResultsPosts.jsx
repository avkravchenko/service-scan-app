import React from "react";
import './results-posts.scss';
import Btn from '../../../../../button-component/Btn';


const ResultsPosts = () => {
    return (
        <div>
            <h2 className="results-posts-header">Список документов</h2>
            <div  className="results-posts__content">
                <div className="results-posts__content__card">
                    <p>
                        Дата Источник
                    </p>
                    <h2 className="results-posts__content__card__header">Заголовок</h2>
                    <p className="results-posts__content__card__post-type">Технические новости</p>
                    <div className="results-posts__content__card__image">
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea praesentium voluptate tenetur, quas assumenda repellat delectus, earum amet voluptatum harum fugit debitis consequatur eos vel natus? Sunt veniam in iusto inventore ad provident minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe placeat ullam tenetur laboriosam voluptatum ut beatae deleniti perferendis pariatur mollitia? Magni nisi tempore iusto explicabo itaque fugiat at voluptates! Necessitatibus, beatae iusto pariatur nihil quaerat officiis velit totam, sit praesentium quisquam officia in sint explicabo modi, expedita distinctio dolore corrupti.</p>
                    <Btn className={'results-posts__content__card__btn'} text={'Читать в источнике'} />
                </div>
                <div className="results-posts__content__card">
                    <p>
                        Дата Источник
                    </p>
                    <h2 className="results-posts__content__card__header">Заголовок</h2>
                    <p className="results-posts__content__card__post-type">Тип новости</p>
                    <div className="results-posts__content__card__image">
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea praesentium voluptate tenetur, quas assumenda repellat delectus, earum amet voluptatum harum fugit debitis consequatur eos vel natus? Sunt veniam in iusto inventore ad provident minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe placeat ullam tenetur laboriosam voluptatum ut beatae deleniti perferendis pariatur mollitia? Magni nisi tempore iusto explicabo itaque fugiat at voluptates! Necessitatibus, beatae iusto pariatur nihil quaerat officiis velit totam, sit praesentium quisquam officia in sint explicabo modi, expedita distinctio dolore corrupti.</p>
                    <Btn className={'results-posts__content__card__btn'} text={'Читать в источнике'} />
                </div>
                
            </div>
            <div className="load-more__wrapper"><Btn text={'Показать больше'} className={'load-more'} /></div>
        </div>
    )
}

export default ResultsPosts;