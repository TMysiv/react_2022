import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCarById,updateCar} from "../../store";
import css from './car.css'

const Car = ({car}) => {
    const {id,model,price,year}= car
    const dispatch = useDispatch();

    return (
        <div className={'car_wrap'}>
            <p>id:{id}</p>
            <p>model:{model}</p>
            <p>price:{price}</p>
            <p>year:{year}</p>
            <button onClick={()=>{dispatch(deleteCarById({id}))}}>delete</button>
            <button onClick={()=>{dispatch(updateCar({id}))}}>update</button>
        </div>
    );
};

export default Car;