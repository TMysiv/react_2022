import React from 'react';

import css from './album.css'
import {Link, Outlet} from "react-router-dom";

const Album = ({album: {userId, id, title}}) => {

    return (
        <div>
            <div className={'album'}>
                <div>
                    <ul>
                        <li>userId = {userId}</li>
                        <li>{id}</li>
                        <li>Title = {title}</li>
                    </ul>
                </div>
                <div>
                    <Link to={`${id}/photos`}>
                        <button>Photos</button>
                    </Link>
                </div>
            </div>

            <Outlet/>
        </div>
    );
};

export default Album;