import React, {useEffect, useState} from 'react';

import newPhoto from "../../services/api.service";

const City = () => {

    const [city, setCity] = useState(null);

    useEffect(() => {
        newPhoto.getCity().then(value => setCity(value.url))
    }, [])

    const upDate = () => {
        newPhoto.getCity().then(value => setCity(value.url))
    }
    return (
        <div>
            <div>{<img src={city} alt="city"/>}</div>
            <button onClick={() => {
                upDate()
            }}>UPDATE
            </button>
        </div>
    );
};

export default City;