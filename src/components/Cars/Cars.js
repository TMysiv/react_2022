import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({deleteById,trigger,getDetail}) => {

    const [cars,setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(value => setCars(value))
    },[trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteById={deleteById} getDetail={getDetail} />)}
        </div>
    );
};


export default Cars;