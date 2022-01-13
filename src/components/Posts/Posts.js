import React from 'react';

const Posts = ({post:{userId,title,body}}) => {


    return (
        <div>
            <h2>{userId}--{title}--{body}</h2>
        </div>
    );
};

export default Posts;