import React from 'react';
import Forms from "../Forms/Forms";

const Reducer = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'input text':
                return {...state, [action.field]: action.payload};
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