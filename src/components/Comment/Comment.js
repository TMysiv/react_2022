import React from 'react';

const Comment = ({comment:{id,name,email}}) => {


    return (
        <div>
            {id} {name}{email}
        </div>
    );
};

export default Comment;