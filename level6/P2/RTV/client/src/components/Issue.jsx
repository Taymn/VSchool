import React from 'react';

export default function Issue(props){
    const { title, description, upVote,downVote, comments } = props
    return (
        <div className='issue'>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <>
                <a>{upVote}</a>
                <a>{downVote}</a>
            </>
            <p>{comments.text}</p>
        </div>
    )
}