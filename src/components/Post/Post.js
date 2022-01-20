import React from 'react';

const Post = ({post: {userId, title}}) => {

    return (
        <div>
            Title: {title}
        </div>
    );
};

export default Post;