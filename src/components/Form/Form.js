import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import carService from "../../services/carService";
import {carValidator} from "../../validator/car.validator";
import './form.css'


const Form = ({refreshCars,upDateCarById}) => {

    const {
        register, handleSubmit, formState: {errors}
    }
        = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    const [error, setError] = useState({});


    const addNewCar = (car) => {
        try {
        carService.create(car).then(value => {
            refreshCars(value)
        })
        }catch (error){
            setError(error.response.data)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(addNewCar)}>

                <label>Model:<input type="text" defaultValue={''} {...register('model')}/></label>
                {errors.model && <h3>{errors.model.message}</h3>}

                <label>Price:<input type="text" defaultValue={''} {...register('price')}/></label>
                {errors.price && <h3>{errors.price.message}</h3>}

                <label>Year:<input type="text" defaultValue={''} {...register('year')}/></label>
                {errors.year && <h3>{errors.year.message}</h3>}

                <button>Send</button>

            </form>
        </div>
    );
};

export default Form;