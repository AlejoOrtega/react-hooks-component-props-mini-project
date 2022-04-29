import React from 'react';

function Article({post, date}) {
    let {title, preview, minutes} = post

    const howMuch = (minutes) =>{
        let result, emojis = ''
        if(minutes >= 30){
            result = Math.ceil(minutes/10)
            for (let index = 0; index < result; index++) {
                emojis += '🍱'                
            }
        }else{
            result = Math.ceil(minutes/5)
            for (let index = 0; index < result; index++) {
                emojis += '☕️'                
            }
        }
        emojis += ` ${minutes} min read`
        return emojis
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} * {howMuch(minutes)}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;