import React from 'react';
import {useSelector} from "react-redux";

const UserDetails = () => {

    const {user} = useSelector(state => state['usersReducer']);

    const {id,name,username,email}= user
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{email}</h3>
        </div>
    );
};

export default UserDetails;