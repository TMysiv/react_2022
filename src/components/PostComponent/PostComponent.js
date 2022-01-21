import React from 'react';
import {Link} from "react-router-dom";

const PostComponent = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <h6>id={id} {title}</h6>
            <Link to={id.toString()} state={post}>
                <button>details</button>
            </Link>
        </div>
    );
};

export default PostComponent;