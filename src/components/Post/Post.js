import React from 'react';

import './post.css'

const Post = ({post: {userId, id, title, body}}) => {


    return (
        <div className={'post'}>
            <h2>{userId} {id} {title} {body}</h2>
        </div>
    );
};

export default Post;