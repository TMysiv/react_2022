import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {getDiscover} from "../../ex";

const Form = () => {
    const {
        register,handleSubmit
    } = useForm();

const submit = (car) => {
   carService.create(car).then(value => {
       })
}

    useEffect(()=>{
       getDiscover.getAll().then(value => {
           console.log(value.data)})

    },[])

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" defaultValue={''} {...register('model')}/></label>
                <label>Price:<input type="text" defaultValue={''} {...register('price')} /></label>
                <label>Year:<input type="text" defaultValue={''} {...register('year')}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;