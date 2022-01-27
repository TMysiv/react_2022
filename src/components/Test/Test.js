import React, {useReducer} from 'react';

import css from './test.css'

const Test = ({reducer}) => {

    const [state, dispatch] = useReducer(reducer, {count_1: 0, count_2: 0, count_3: 0});
    console.log(state)
    return (
        <>
            <div className={'count_wrap'}>
                <h5>Count_1 = {state.count_1}</h5>
                <button onClick={() => dispatch({type: 'inc_1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec_1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset_1', payload: 0})}>reset</button>
            </div>
            <div className={'count_wrap'}>
                <h5>Count_2 = {state.count_2}</h5>
                <button onClick={() => dispatch({type: 'inc_2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec_2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset_2', payload: 0})}>reset</button>
            </div>
            <div className={'count_wrap'}>
                <h5>Count_3 = {state.count_3}</h5>
                <button onClick={() => dispatch({type: 'inc_3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec_3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset_3', payload: 0})}>reset</button>
            </div>
        </>
    );
};

export default Test;