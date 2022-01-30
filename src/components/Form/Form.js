import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarById} from "../../store";
import {carValidator} from "../../validators/car.validator";

const Form = () => {

    const {register, handleSubmit, reset,formState:{errors}} = useForm({resolver:joiResolver(carValidator),mode:"onTouched"});
    const dispatch = useDispatch();

    const {carId} = useSelector(state => state['carReducer']);

    const onSubmit = (car) => {
        if (carId) {
            dispatch(updateCarById({carId, car}))
        } else {
            dispatch(createCar({car}))
        }
        reset()
    }
    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model:<input type="text" defaultValue={''} {...register('model')}/></label>
                {errors.model && <span>{errors.model.message}</span>}

                <label>Price:<input type="text" defaultValue={''} {...register('price')}/></label>
                {errors.price && <span>{errors.price.message}</span>}

                <label>Year:<input type="text" defaultValue={''} {...register('year')}/></label>
                {errors.year && <span>{errors.year.message}</span>}

                <button>{carId ? 'update' : 'send'}</button>
            </form>
        </div>
    );
};

export default Form;