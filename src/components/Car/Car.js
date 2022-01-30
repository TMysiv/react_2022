import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarById,updateCar} from "../../store";

const Car = ({car}) => {
    const {id,model,price,year}= car
    const dispatch = useDispatch();

    return (
        <div>
            <p>{model}</p>
            <p>{price}</p>
            <p>{year}</p>
            <button onClick={()=>{dispatch(deleteCarById({id}))}}>delete</button>
            <button onClick={()=>{dispatch(updateCar({id}))}}>update</button>
            <hr/>
        </div>
    );
};

export default Car;