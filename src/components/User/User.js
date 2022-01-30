import React from 'react';

import css from './user.css'

const User = ({user: {id, name, username, email}}) => {

    return (
        <div className={'user_wrap'}>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>username:{username}</p>
            <p>email:{email}</p>
        </div>
    );
};

export default User;