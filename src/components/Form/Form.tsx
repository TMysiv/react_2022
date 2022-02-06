import React,{FC} from 'react';
import {useForm} from "react-hook-form";

const Form:FC = () => {
    const {handleSubmit,register,reset} = useForm();

    return (
        <div>
            <form>
                <input type="text" placeholder={'model'}/>
                <input type="text" placeholder={'price'}/>
                <input type="text" placeholder={'year'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;