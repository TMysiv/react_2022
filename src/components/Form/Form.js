import React from 'react';

import {useState} from 'react';

const Form = ({getFilter}) => {

    let [form, setForm] = useState({name: '', username: '', email: ''});


    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        getFilter({[e.target.name]: e.target.value})
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={onChange}/></label>

                <label>UserName: <input type="text" name={'username'} value={form.username}
                                        onChange={onChange}/></label>

                <label>Email: <input type="text" name={'email'} value={form.email} onChange={onChange}/></label>

                <button>Find</button>
            </form>


        </div>
    );
};

export default Form;