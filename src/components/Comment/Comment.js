import React from 'react';

import css from './comment.css'

const Comment = ({comment:{name,body}}) => {

    return (
        <div className={'comment'}>
            <h6>name -{name}</h6>
            <h6>body -{body}</h6>
        </div>
    );
};

export default Comment;