import React from 'react';

import Forms from "../Forms/Forms";

const Reducer = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addDog':
                return {...state, dog: [...state.dog, action.payload]};
            case 'addCat':
                return {...state, cat: [...state.cat, action.payload]};
            case 'delDog':
                return {...state, dog: state.dog.filter(dog => dog.id != action.payload)}
            case 'delCat':
                return {...state, cat: state.cat.filter(cat => cat.id != action.payload)}
            default :
                return state
        }
    }

    return (
        <div>
            <Forms reducer={reducer}/>
        </div>
    );
};

export default Reducer;