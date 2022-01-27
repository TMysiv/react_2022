import React from 'react';

import css from './dog.css'

const Dog = ({dog}) => {

    const deleteDog = () => {

    }
    return (
        <div className={'wrap_dog'}>
            <h5>{dog}</h5>
            <button onClick={deleteDog}>delete</button>
        </div>
    );
};

export default Dog;