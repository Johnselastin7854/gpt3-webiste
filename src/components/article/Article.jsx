import React from 'react';

import "./Article.css";

const Article = ({imgUrl,date,text,link}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{text}</h3>
        <p>{link}</p>
      </div>
    </div>
  )
}

export default Article;