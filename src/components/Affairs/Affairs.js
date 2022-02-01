import React from "react";
import {useSelector} from "react-redux";
import Affair from "../Affair/Affair";

const Affairs = () => {

    const {affairs} = useSelector(state => state['formReducer']);

    return (
        <div>
            {affairs.map(affair=><Affair key={affair.id} affair={affair}/>)}
        </div>
    );
};

export default Affairs;