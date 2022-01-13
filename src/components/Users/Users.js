import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/users.service";
import User from "../User/User";

const Users = () => {

    let [users,setUsers] = useState([]);

   useEffect(() =>{
       getUsers().then(users => {
           setUsers(users)
       })
   })


    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;