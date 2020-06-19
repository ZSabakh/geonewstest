import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArticleList.css';


function ArticleList() {

    const [news, setNews] = useState([])



    const fetchNews = () => {
        axios.get('http://m.geotimes.com.ge/api/wall.php')
            .then(response => {
                setNews(response.data.body)
            })
    }

    useEffect(() => {
        fetchNews()
    }, [fetchNews])

    return (
        <div className="article_list">
            {news.map((item, index) => (
                <div key={index}>
                    <Link to={`/news/${item.rec_id}`}>
                        <div className="news_item">
                            <img src={item.img} alt="news"></img>
                            <div className="name_holder">
                                {item.title}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )


}

export default ArticleList;
