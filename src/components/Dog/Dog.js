import React from 'react';

import css from './dog.css'

const Dog = ({dog}) => {

    return (
        <div className={'wrap_dog'}>
            <h5>{dog}</h5>
            <button>delete</button>
        </div>
    );
};

export default Dog;