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
    const token = useSelector(state => state.token)
    const searchFormIds = useSelector(state => state.searchFormIds)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(10)
    const searchFormResponse = useSelector(state => state.searchFormResponse)

    useEffect(() => {
        if (token && searchFormIds) {
            
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
    }, [token, searchFormIds, startIndex, endIndex]);

    const handleLoadMore = () => {
        setStartIndex(startIndex + 10)
        setEndIndex(endIndex + 10)
        setLoading(true)
    };

    return (
        <div>
          <h2 className="results-posts-header">Список документов</h2>
          {posts && posts.length > 0 && searchFormIds && searchFormResponse.data.length > 0 ? (
            <>
              <div className="results-posts__content">
                {posts.map(item => (
                  <div key={uuid()} className="results-posts__content__card">
                    <p className="results-posts__content__card__source_date">
                      {dayjs(item.ok.issueDate).format("DD.MM.YYYY")} {item.ok.url ?  (<a target="_blank" href={item.ok.url}>{item.ok.source.name}</a>) : (<span>{item.ok.source.name}</span>)} 
                    </p>
                    <h2 className="results-posts__content__card__header">{item.ok.title.text}</h2>
                    <p className="results-posts__content__card__post-type">
                      {(item.ok.attributes['isTechNews'] && 'Технические новости') || 
                      (item.ok.attributes['isAnnouncement'] && 'Аннонсы') || 
                      (item.ok.attributes['isDigest'] && 'Дайджесты') || 'Новости'}
                    </p>
                    <div className="results-posts__content__card__image"></div>
                    <div className="results-posts__content__card__content">
                      <XMLToHTML xml={item.ok.content.markup} />
                    </div>
                    {item.ok.url ?  (<a target="_blank" className="results-posts__content__card__btn" href={item.ok.url}>Читать в источнике</a>) : null}
                    <span className="results-posts__content__amount-of-words">{item.ok.attributes.wordCount && item.ok.attributes.wordCount} слова</span>
                  </div>
                ))}
              </div>
                {posts && posts.length > 0 && searchFormIds && searchFormIds.items.length > 0 && posts[posts.length - 1].ok.id === searchFormIds.items[searchFormIds.items.length - 1].encodedId ? null : 
                    <div className="load-more__wrapper">
                        <Button loading={loading} onClick={handleLoadMore} className={'load-more'} type="primary">Показать больше</Button>
                    </div>
                }

            </>
          ) : (
            <p>Данные не найдены</p>
          )}
        </div>
      );
      
}

export default ResultsPosts;
//