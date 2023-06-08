import React, { useEffect, useState } from "react";
import './results-posts.scss';
import Btn from '../../../../../button-component/Btn';
import axios from "axios";
import { useSelector } from "react-redux";
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import uuid from "react-uuid";
import XMLToHTML from "../../../../../XML-converter/XMLToHTML";
import { Button } from 'antd';

const ResultsPosts = () => {
    const token = useSelector(state => state.token);
    const searchFormIds = useSelector(state => state.searchFormIds)
    const searchFormResponse = useSelector(state => state.searchFormResponse)
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loadedPosts, setLoadedPosts] = useState(10); 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (token && searchFormIds && searchFormResponse) {
            const startIndex = (page - 1) * loadedPosts;
            const endIndex = startIndex + loadedPosts;
            const chunkedIds = searchFormIds.items
                .slice(startIndex, endIndex)
                .map(item => item.encodedId);
            axios
            .post(
                'https://gateway.scan-interfax.ru/api/v1/documents',
                {
                    ids: chunkedIds,
                },
                {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                }
            )
            .then((response) => {
                setPosts((prevPosts) => [...prevPosts, ...response.data]);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [page, searchFormIds]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
        setLoading(true)
    };

    return (
        <div>
          {searchFormResponse ? (
            <>
              <h2 className="results-posts-header">Список документов</h2>
              <div className="results-posts__content">
                {posts.map(item => (
                  <div key={uuid()} className="results-posts__content__card">
                    <p>
                      {dayjs(item.ok.issueDate).format("DD.MM.YYYY")} {item.ok.source.name}
                    </p>
                    <h2 className="results-posts__content__card__header">{item.ok.title.text}</h2>
                    <p className="results-posts__content__card__post-type">Технические новости</p>
                    <div className="results-posts__content__card__image"></div>
                    <div className="results-posts__content__card__content">
                      <XMLToHTML xml={item.ok.content.markup} />
                    </div>
                    <Btn className={'results-posts__content__card__btn'} text={'Читать в источнике'} />
                  </div>
                ))}
              </div>
              <div className="load-more__wrapper">
                <Button loading={loading} onClick={handleLoadMore} className={'load-more'} type="primary">Показать больше</Button>
              </div>
            </>
          ) : (
            null
          )}
        </div>
      );
      
}

export default ResultsPosts;
