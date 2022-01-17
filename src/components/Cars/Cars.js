import React, { useEffect, useState} from 'react';

import carService from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger,deleteCarId,upDateCarById}) => {

    const [cars,setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(car => setCars([...car]))
    },[trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCarId={deleteCarId} upDateCarById={upDateCarById}/> )}
        </div>

    );
};

export default Cars;