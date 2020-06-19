import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Article.css';


function Article(props) {

  const [posts, setPosts] = useState([])


  const handle = props.match.params;

  const fetchNews = () => {
    axios.get('http://m.geotimes.com.ge/api/wall.php?id=' + handle.rec_id)
      .then(response => {
        setPosts(response.data.body)
      })
  }

  useEffect(() => {
    fetchNews()
  }, [])


  return (
    <div className="Article">

      <div id="article-loader">
        {posts.length === 0 && (<h2>დაელოდეთ ...</h2>)}
      </div>

      {posts.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="News" />
          <h1 className="Title" dangerouslySetInnerHTML={{ __html: item.title }} />
          <div className="Text" dangerouslySetInnerHTML={{ __html: item.text }} />
        </div>
      ))}
    </div>
  );
}


export default Article;
