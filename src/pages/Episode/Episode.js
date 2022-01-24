import React from 'react';

import css from './episode.css'
import {Link} from "react-router-dom";

const Episode = ({episodes}) => {

    const {id,name,episode,air_date} = episodes;

    return (
        <div className={'single_episode'}>
            <h5>{name}</h5>
            <h5>Episode:  {episode}</h5>
            <h5>Air_Date:  {air_date}</h5>
            <Link to={`episode=${id}`} state={episodes}>DETAILS EPISODE</Link>
        </div>
    );
};

export default Episode;