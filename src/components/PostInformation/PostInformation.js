import React from 'react';

import css from './postInformation.css'

const PostInformation = ({post:{id,title,body,userId}}) => {
    return (
        <div className={'postInformation'}>
            <h6>id={id}</h6>
            <h6>userId={userId}</h6>
            <h6>title: {title}</h6>
            <h6>body: {body}</h6>
            <button>Comments</button>
        </div>
    );
};

export default PostInformation;