import React from "react";
import {useSelector} from "react-redux";

const Checkbox = () => {

    const {affairs,completed} = useSelector(state => state['formReducer']);

    return (
        <div>
            <h2>ALL:{affairs.length} Completed:{completed}</h2>
        </div>
    );
};

export default Checkbox;