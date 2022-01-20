import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";


const UpdateForm = ({submit}) => {
    const {
        register,handleSubmit
    } = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>model<input type="text" defaultValue={''} {...register('model')}/></label>
                <label>price<input type="text" defaultValue={''} {...register('price')}/></label>
                <label>year<input type="text" defaultValue={''} {...register('year')}/></label>
                <button>update</button>
            </form>
        </div>
    );
};

export default UpdateForm;