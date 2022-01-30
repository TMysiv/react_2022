import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {

const {
    register,handleSubmit,reset
} = useForm();

const onSubmit = (data) => {
  reset()
}
    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model:<input type="text" defaultValue={''} {...register('model')}/></label>
                <label>Price:<input type="text" defaultValue={''} {...register('price')}/></label>
                <label>Year:<input type="text" defaultValue={''} {...register('year')}/></label>
            </form>
        </div>
    );
};

export default Form;