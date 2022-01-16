import "./App.css"

import React, {useState} from 'react';

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import carService from "./services/carService";

const App = () => {

    const [trigger, setTrigger] = useState(null);

    const refreshCars = (car) => {
        setTrigger(car)
    }

    const deleteCarId = (id) => {
        carService.deleteById(id)
    }


    const upDateCarById = (id,car) =>{
        carService.upDateById(id,{model:'kia',price:16000,year:2018})
        setTrigger(car)
    }



    return (
        <div>
            <Form refreshCars={refreshCars}/>
            <Cars trigger={trigger} deleteCarId={deleteCarId} upDateCarById={upDateCarById}/>
        </div>
    );
};


export default App;