import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {addCar, updateCarById} from "../../store/car.slice";
import {ICar} from "../../interfaces/car.interface";

const Form: FC = () => {
    const {handleSubmit, register, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const {carId} = useAppSelector(state => state.carReducer);

    const submit: SubmitHandler<ICar> = (car) => {
        if (carId) {
            dispatch(updateCarById({carId, car}))
        } else {
            dispatch(addCar({car}))
        }
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>{carId ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export default Form;