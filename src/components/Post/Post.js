import React from 'react';

const Post = ({post:{id,tittle,body}}) => {
    return (
        <div>
            id -- {id} tittle -- {tittle} -- body {body}
        </div>
    );
};

export default Post;