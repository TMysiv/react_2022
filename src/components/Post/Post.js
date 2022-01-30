import React from 'react';

import css from './post.css'

const Post = ({post:{id,title,body}}) => {

    return (
        <div className={'posts_wrap'}>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;