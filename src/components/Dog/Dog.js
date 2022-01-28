import React from 'react';

const Dog = ({dog, dispatch}) => {

    return (
        <div>
            {dog.name}
            <button onClick={() => {
                dispatch({
                    type: 'delDog',
                    target: 'dog',
                    payload: dog.id
                })
            }}>delete
            </button>
        </div>
    );
};

export default Dog;