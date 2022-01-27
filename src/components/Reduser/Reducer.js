import React from 'react';

import Test from "../Test/Test";

const Reducer = () => {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'inc_1':
                return {...state, count_1: state.count_1 + 1};
            case 'dec_1':
                return {...state, count_1: state.count_1 - 1};
            case 'reset_1':
                return {...state, count_1: action.payload};
            case 'inc_2':
                return {...state, count_2: state.count_2 + 1};
            case 'dec_2':
                return {...state, count_2: state.count_2 - 1};
            case 'reset_2':
                return {...state, count_2: action.payload};
            case 'inc_3':
                return {...state, count_3: state.count_3 + 1};
            case 'dec_3':
                return {...state, count_3: state.count_3 - 1};
            case 'reset_3':
                return {...state, count_3: action.payload};
            default:
                throw new Error('OMG')
        }return state

    }
    return (
        <div>
            <Test reducer={reducer}/>
        </div>
    );
};

export default Reducer;