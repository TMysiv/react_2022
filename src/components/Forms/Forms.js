import React, {createRef, useReducer} from 'react';

import css from './forms.css'
import Dog from "../Dog/Dog";
import Cat from "../Cat/Cat";

const Forms = ({reducer}) => {

    const [state, dispatch] = useReducer(reducer, {dog: [], cat: []});

    const inputDog = createRef();
    const inputCat = createRef();

    const addDog = (e) => {
        e.preventDefault()
        const newDog = inputDog.current.value
        dispatch({
            type: 'addDog',
            target: 'dog',
            payload: {name: newDog,id:new Date().getTime()}
        })
        inputDog.current.value=''

    }
    const addCat = (e) => {
        e.preventDefault()
        const newCat = inputCat.current.value
        dispatch({
            type: 'addCat',
            target: 'cat',
            payload: {name: newCat,id:new Date().getTime()}
        })
        inputCat.current.value=''
    }
    return (
        <div className={'wrap'}>
            <div>
                <form>
                    <label>ADD Dog:<input type="text" name={'dog'} ref={inputDog}/></label>
                    <button onClick={addDog}>Save</button>

                    {state.dog.map(dog =><Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}

                    <label>ADD Cat:<input type="text" name={'cat'} ref={inputCat}/></label>
                    <button onClick={addCat}>Save</button>

                    {state.cat.map(cat=><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
                </form>
            </div>


        </div>
    );
};

export default Forms;