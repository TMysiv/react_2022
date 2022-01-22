import React, {useEffect, useState} from 'react';

import newPhoto from "../../services/api.service";

const Dog = () => {

    const [dog, setDog] = useState(null);

    useEffect(() => {
        newPhoto.getDog().then(value => setDog(value.url))
    }, [])

    const upDate = () => {
        newPhoto.getDog().then(value => setDog(value.url))
    }
    return (
        <div className={'cat_wrap'}>
            <div>{<img src={dog} alt="dog"/>}</div>
            <button onClick={() => {
                upDate()
            }}>UPDATE
            </button>
        </div>
    );
};

export default Dog;