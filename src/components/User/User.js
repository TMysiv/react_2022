import React from 'react';

import './user.css'


const User = ({user:{id,name,email,username},chooseUser}) => {

    return (
        <div className={'user'}>
            <h2>{id}--{name}--{username}--{email}</h2>
            <button onClick={()=>{
                chooseUser(id)
            }
            }>Details</button>
        </div>
    );
};

export default User;