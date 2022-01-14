import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/users.service";
import User from "../User/User";

const Users = ({getDetails}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getDetails={getDetails}/>)}
            </div>
        </div>
    );
};

export default Users;