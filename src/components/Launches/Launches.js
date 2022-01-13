import React, {useEffect, useState} from 'react';

import {getLaunch} from "../../services/launch.service";
import Flight from "../Flight/Flight";


const Launches = () => {

    let [launches,setLaunches] = useState([]);

    useEffect(()=>{
        getLaunch().then(launches =>{
            let filter = launches.filter(launches => launches.launch_year !=='2020');
            setLaunches(filter)
        })
    },[])

    return (
        <div>
            {launches.map(launches => <Flight flight={launches}/>)}
        </div>
    );
};

export default Launches;