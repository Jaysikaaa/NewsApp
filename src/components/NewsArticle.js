import React from 'react'
import ContextMenu from './ContextMenu'



function NewsArticle({newsArticles}) {

  return (
    <>
  <ul >
      {newsArticles.map((article) => 
        <li key={article.id}>
          <div >
            <img className='news-thumbnail' src={article.thumbnail} alt={article.id}></img>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </div>
        <div>
          <ContextMenu articleId={article.id}/>
        </div>
        </li>
       )
      } 
    </ul>
    </>
  )
}

export default NewsArticle
