import React, {useState} from "react";
import {useDispatch} from "react-redux";

import css from "./affair.css"
import {deleteAffair, getChecked} from "../../store/form.slice";

const Affair = ({affair: {id, name}}) => {

    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();

    if (checked){
        dispatch(getChecked({checked}))
    }

    return (
        <div className={'wrap_affair'}>
            <div className={checked ? 'checked' : 'unchecked'}>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                {name}
            </div>
            <button onClick={() => {dispatch(deleteAffair({id}))}}>delete</button>
        </div>
    );
};

export default Affair;