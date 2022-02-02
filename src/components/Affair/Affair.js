import React from "react";
import {useDispatch} from "react-redux";

import css from "./affair.css"
import {deleteAffair, getChecked} from "../../store/form.slice";

const Affair = ({affair: {id, name,status}}) => {

    const dispatch = useDispatch();

    return (
        <div className={'wrap_affair'}>
            <div className={status?'checked':'unchecked'}>
                <input type="checkbox" value={status} onChange={() => dispatch(getChecked({id}))}/>
                {name}
            </div>
            <button onClick={() => {dispatch(deleteAffair({id,status}))}}>delete</button>
        </div>
    );
};

export default Affair;