import React from 'react';

import './user.css'

const User = ({user, getDetails}) => {


    return (
        <div className={'user'}>
            {user.id}) {user.name} -- {user.username}
            <button onClick={() => {
                getDetails(user)
            }}>
                details
            </button>
        </div>
    );
};

export default User;