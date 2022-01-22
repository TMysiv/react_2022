import React, {useEffect, useState} from 'react';

import newPhoto from "../../services/api.service";

const Mountain = () => {

    const [mountain, setMountain] = useState(null);

    useEffect(() => {
        newPhoto.getMountain().then(value => setMountain(value.url))
    }, [])

    const upDate = () => {
        newPhoto.getMountain().then(value => setMountain(value.url))
    }
    return (
        <div>
            <div>{<img src={mountain} alt="mountain"/>}</div>
            <button onClick={() => {
                upDate()
            }}>UPDATE
            </button>
        </div>
    );
};

export default Mountain;