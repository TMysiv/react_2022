import React from 'react';

const Cat = ({cat,dispatch}) => {

    return (
        <div>
            {cat.name}
            <button onClick={()=>{
                dispatch({
                    type: 'delCat',
                    target: 'cat',
                    payload: cat.id
                })
            }}>delete
            </button>
        </div>
    );
};

export default Cat;