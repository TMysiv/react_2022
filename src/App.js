import "./App.css"

import React, {useState} from 'react';

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import carService from "./services/carService";
import FormUpdate from "./components/FormUpdate/FormUpdate";


const App = () => {

    const [trigger, setTrigger] = useState(null);

    const refreshCars = (car) => {
        setTrigger(car)
    }

    const deleteCarId = (id) => {
        carService.deleteById(id).then(value => setTrigger(value))
    }


    return (
        <div>
            <Form refreshCars={refreshCars} />
            <FormUpdate updateCar={updateCar}/>
            <Cars trigger={trigger} deleteCarId={deleteCarId} upDateCarById={updateCar} />
        </div>
    );
};

export default App;