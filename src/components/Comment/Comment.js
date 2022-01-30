import React from 'react';

import css from './comment.css'

const Comment = ({comment: {name, email, body}}) => {
    return (
        <div className={'comment_wrap'}>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Comment;