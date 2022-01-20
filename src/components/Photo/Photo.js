import React from 'react';

const Photo = ({photo: {albumId, id, title}}) => {
    return (
        <div>
            albumId:{albumId}
            id {id}
            title:{title}

        </div>
    );
};

export default Photo;