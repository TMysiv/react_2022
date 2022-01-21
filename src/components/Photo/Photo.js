import React from 'react';

import css from './photo.css'

const Photo = ({photo: {albumId, id, title,url}}) => {
    return (
        <div className={'photo'}>
            <h6>albumId:{albumId}</h6>
            <h6> id {id}</h6>
            <h6>title:{title}</h6>
            <img src={url} alt={id}/>

        </div>
    );
};

export default Photo;