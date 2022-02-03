import React from 'react';
import {useDispatch} from "react-redux";

import css from './user.css'
import {getUser, getUserById} from "../../store/users.slice";

const User = ({user}) => {
    const  {id, name, username, email}= user

    const dispatch = useDispatch();

    return (
        <div className={'user_wrap'}>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>username:{username}</p>
            <p>email:{email}</p>
            <button onClick={()=> {dispatch(getUserById({id}))}}>details</button>
        </div>
    );
};

export default User;