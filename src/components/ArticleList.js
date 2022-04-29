import React from 'react';
import Article from './Article';

function ArticleList(props){

    const listArticles = (posts) => {
        return posts.map((post)=>{
            return <Article key={post.id} date={post.date} post={post}/>
        }) 
    }

    return (
        <main>
            {listArticles(props.posts)}
        </main>
    );
}

Article.defaultProps = {
    date: 'January 1, 1970'
}

export default ArticleList;