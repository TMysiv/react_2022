import React from 'react';

const Car = ({car,deleteById,getDetail}) => {

    const {id,model,price,year} = car
    return (
        <div>
            <h3>{id}</h3>
            <h3>{model}</h3>
            <h3>{price}</h3>
            <h3>{year}</h3>
            <button onClick={()=>{deleteById(id)}}>delete</button>
            <button onClick={()=>{getDetail(id)}}>option</button>



            <hr/>
        </div>
    );
};

export default Car;