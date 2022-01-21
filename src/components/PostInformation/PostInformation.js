import React from 'react';

import css from './postInformation.css'
import {Link} from "react-router-dom";

const PostInformation = ({post: {id, title, body, userId}}) => {
    return (
        <div className={'postInformation'}>
            <h6>id={id}</h6>
            <h6>userId={userId}</h6>
            <h6>title: {title}</h6>
            <h6>body: {body}</h6>
            <Link to={'comments'}>
                <button>Comments</button>

            </Link>
        </div>
    );
};

export default PostInformation;