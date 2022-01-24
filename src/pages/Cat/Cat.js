import React, {useEffect, useState} from 'react';

import newPhoto from "../../services/api.service";

const Cat = () => {
    
    const [cat, setCat] = useState(null);

    useEffect(() => {
        newPhoto.getCat().then(value => setCat(value.url))
    }, [])

    const upDate = () => {
        newPhoto.getCat().then(value => setCat(value.url))
    }
    return (
        <div>
            <div>{<img src={cat} alt="cat"/>}</div>
            <button onClick={() => {
                upDate()
            }}>UPDATE
            </button>
        </div>
    );
};

export default Cat;