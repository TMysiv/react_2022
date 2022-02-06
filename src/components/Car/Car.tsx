import React, {FC} from 'react';

import {useAppDispatch} from "../../hooks/redux-hooks";
import {ICar} from "../../interfaces/car.interface";
import {deleteCarById, update} from "../../store/car.slice";

const Car: FC<{ car: ICar }> = ({car:{id,price,year,model}}) => {

    const dispatch = useAppDispatch();
    return (

        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>{dispatch(deleteCarById({id}))}}>delete</button>
            <button onClick={()=>{dispatch(update({id}))}}>update</button>
            <hr/>
        </div>
    );
};

export default Car;