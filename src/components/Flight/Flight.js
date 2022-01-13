import React from 'react';

const Flight = ({flight:{mission_name,launch_year,links}}) => {


    return (
        <div>
            <h2>{mission_name}</h2>
            <h3>{launch_year}</h3>
            <img src={links.mission_patch_small} alt = {mission_name}/>
        </div>
    );
};

export default Flight;