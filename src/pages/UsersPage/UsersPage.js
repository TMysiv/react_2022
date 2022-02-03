import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/users.slice";
import User from "../../components/User/User";
import css from './userspage.css'
import UserDetails from "../../components/UserDetails/UserDetails";

const UsersPage = () => {

const dispatch = useDispatch();
const {users,status,errors} = useSelector(state => state['usersReducer']);

useEffect(()=>{
    dispatch(getAllUsers())
},[])
    return (
        <div className={'wrap'}>
            {status === 'pending' && <h4>{status}</h4>}
            {errors && <h2>{errors}</h2>}
            {users.map(user=><User key={user.id} user={user}/>)}
            <UserDetails/>
        </div>
    );
};

export default UsersPage;