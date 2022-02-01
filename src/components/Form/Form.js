import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import  {createAffair} from "../../store/form.slice";

const Form = () => {

    const {register,handleSubmit,reset} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createAffair({data}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'to do'} {...register('name')}/>
                <button>Save</button>
            </form>
        </div>
    );
}

export default Form;