import React from 'react';
import BlogPost from './BlogPost';
import data from '../../data'

function BlogList() {

    const blogs = data.map(blog => {
        return (
            <BlogPost
                key={blog.id}
                {...blog}
            // title={blog.title}
            // subTitle={blog.subTitle}
            // author={blog.author}
            // date={blog.date}
            />
        )
    })

    return (
        <div>
            {blogs}
        </div>
    );
}

export default BlogList;