import React, {useReducer} from 'react';

import css from './forms.css'
import Dogs from "../Dogs/Dogs";

const Forms = ({reducer}) => {

    const [state, dispatch] = useReducer(reducer, {addDog: '', addCat: ''});

    const onChange = (e) => {
        dispatch(
            {
                type: 'input text',
                field: e.target.name,
                payload: e.target.value
            })
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const newDog = (state) => {
        const dog = JSON.parse(localStorage.getItem('dogs')) || [];
        dog.push(state)
        localStorage.setItem('dogs', JSON.stringify(dog))
    }
    const newCat = (state) => {
        const cat = JSON.parse(localStorage.getItem('cat')) || [];
        cat.push(state)
        localStorage.setItem('cat', JSON.stringify(cat))
    }

    return (
        <div className={'wrap'}>
            <div>
                <form onSubmit={onSubmit}>
                    <label>Add Dog:<input type="text" name={'addDog'} value={state.addDog} onChange={onChange}/></label>
                    <button onClick={() => {
                        newDog(state.addDog)
                    }}>save
                    </button>
                </form>
                <Dogs/>

            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <label>Add Cat:<input type="text" name={'addCat'} value={state.addCat} onChange={onChange}/></label>
                    <button onClick={() => {
                        newCat(state.addCat)
                    }}>save
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Forms;