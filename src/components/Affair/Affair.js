import React from "react";
import {useDispatch} from "react-redux";

import css from "./affair.css"
import {deleteAffair, getChecked} from "../../store/form.slice";

const Affair = ({affair: {id, name}}) => {

    const dispatch = useDispatch();

    return (
        <div className={'wrap_affair'}>
            <div>
                <input type="checkbox" onChange={() => dispatch(getChecked({id}))}/>
                {name}
            </div>
            <button onClick={() => {dispatch(deleteAffair({id}))}}>delete</button>
        </div>
    );
};

export default Affair;