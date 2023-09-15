import React from 'react';

function BlogPost(props) {
    return (
        <section className='posts'>
            <h2>{props.title}</h2>
            <span>{props.subTitle}</span>
            <span>Posted by <a>{props.author}</a> on {props.date}</span>
            <hr />
        </section>
    );
}

export default BlogPost;