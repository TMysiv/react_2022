import React, {useState} from "react";
import {useDispatch} from "react-redux";

import css from "./affair.css"
import {checkedCheckbox, deleteAffair} from "../../store/form.slice";

const Affair = ({affair:{id,name}}) => {

    const [checked, setChecked] = useState(true)
    const dispatch = useDispatch();

    // dispatch(checkedCheckbox({checked}))
    if (checked===true){
        
    }
    return (
        <div className={'affair'}>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            {name}
            <button onClick={()=>{dispatch(deleteAffair({id}))}}>delete</button>
        </div>
    );
};

export default Affair;