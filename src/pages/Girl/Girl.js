import React, {useEffect, useState} from 'react';

import newPhoto from "../../services/api.service";

const Girl = () => {

    const [girl, setGirl] = useState(null);

    useEffect(() => {
        newPhoto.getGirl().then(value => setGirl(value.url))
    }, [])

    const upDate = () => {
        newPhoto.getGirl().then(value => setGirl(value.url))
    }
    return (
        <div className={'cat_wrap'}>
            <div>{<img src={girl} alt="girl"/>}</div>
            <button onClick={() => {
                upDate()
            }}>UPDATE
            </button>
        </div>
    );
};

export default Girl;