import React from 'react';

const Car = ({car, deleteCarId, upDateCarById}) => {

    const {id, model, price, year} = car;

    return (
        <div>
            <ul>
                <li>id = {id}</li>
                <li>model = {model}</li>
                <li>price = {price}</li>
                <li>year = {year}</li>
            </ul>
            <button onClick={() => {
                deleteCarId(id)
            }}>delete
            </button>
            <hr/>
        </div>
    );
};

export default Car;