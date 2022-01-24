import React from 'react';

import css from './singleCharacter.css'

const SingleCharacter = ({character: {image, name, species, status, gender}}) => {

    return (
        <div className={'single'}>
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <h5>species:{species}</h5>
            <h5>status:{status}</h5>
            <h5>gender:{gender}</h5>
        </div>
    );
};

export default SingleCharacter;