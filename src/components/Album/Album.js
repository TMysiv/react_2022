import React from 'react';

import css from './album.css'
import {Link} from "react-router-dom";

const Album = ({album: {userId, id, title}}) => {

    return (
        <div>
            <div className={'album'}>
                <h6>userId={userId} id={id}</h6>
                <h6>{title}</h6>
                <div>
                    <Link to={`${id}/photos`}>
                        <button>Photos</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Album;