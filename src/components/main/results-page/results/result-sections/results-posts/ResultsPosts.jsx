import React, { useEffect, useState } from "react";
import './results-posts.scss';
import Btn from '../../../../../button-component/Btn';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSearchFormIds } from "../../../../../../store/actions";
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Import the locale you want to use
import uuid from "react-uuid";


const ResultsPosts = () => {
    const formData = useSelector(state => state.formData)
    const token = useSelector(state => state.token);
    const dispatch = useDispatch(); 
    const searchFormIds = useSelector(state => state.searchFormIds)
    const [posts, setPosts] = useState()
    console.log(posts)

    useEffect(() => {
        const idsForRequest = {
            ids: []
        };

        if (searchFormIds) {
            searchFormIds.items.map((item, index) => {
                idsForRequest.ids.push(item.encodedId)
            })
        }
        
        if (token && searchFormIds) {
            axios
            .post('https://gateway.scan-interfax.ru/api/v1/documents', idsForRequest, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response)
                setPosts(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
         }
    }, [searchFormIds])


    return (
        <div>
            <h2 className="results-posts-header">Список документов</h2>
            <div  className="results-posts__content">

                {posts && posts.map(item => {

                    return (
                        <div key={uuid()} className="results-posts__content__card">
                            <p>
                                {dayjs(item.ok.issueDate).format('DD.MM.YYYY')} {item.ok.source.name}
                            </p>
                            <h2 className="results-posts__content__card__header">{item.ok.title.text}</h2>
                            <p className="results-posts__content__card__post-type">Технические новости</p>
                            <div className="results-posts__content__card__image">
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea praesentium voluptate tenetur, quas assumenda repellat delectus, earum amet voluptatum harum fugit debitis consequatur eos vel natus? Sunt veniam in iusto inventore ad provident minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe placeat ullam tenetur laboriosam voluptatum ut beatae deleniti perferendis pariatur mollitia? Magni nisi tempore iusto explicabo itaque fugiat at voluptates! Necessitatibus, beatae iusto pariatur nihil quaerat officiis velit totam, sit praesentium quisquam officia in sint explicabo modi, expedita distinctio dolore corrupti.</p>
                            <Btn className={'results-posts__content__card__btn'} text={'Читать в источнике'} />
                        </div>
                    )
                })}
                
               
                
            </div>
            <div className="load-more__wrapper"><Btn text={'Показать больше'} className={'load-more'} /></div>
        </div>
    )
}

export default ResultsPosts;