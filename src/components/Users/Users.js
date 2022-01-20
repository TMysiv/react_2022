import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './users.css'

import ApiService from "../../services/api.service";
import User from "../User/User";


const Users = () => {
    const [users, setUsers] = useState([]);

    const apiService = new ApiService('users');

    useEffect(() => {
        apiService.getAll().then(value => setUsers(value))
    }, [])

    return (

        <div className={'wrap'}>
            <div className={'users'}>
            <h2>Users:</h2>
            {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={'user'}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Users;