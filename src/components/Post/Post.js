import React from 'react';

const Post = ({post: {userId, title,id}}) => {

    return (
        <div>
            Title-{id}: {title}
        </div>
    );
};

export default Post;