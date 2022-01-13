import React, {useEffect, useState} from 'react';

import './users.css'

import {getUserById, getUsers} from "../../services/users.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import {getPosts} from "../../services/posts.service";
import Posts from "../Posts/Posts";


const Users = () => {

    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null);
    let [posts,setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value =>
            setUsers(value))
    },[])

    const chooseUser = (id) => {
        getUserById(id).then(value => {
            setUser(value)
        })
    }


   const addPosts = () => {
     getPosts().then(value =>
         setPosts(value)
     )
   }


    return (
        <div className={'users'}>

            <div>
                {users.map(value => <User key={value.id} user={value} chooseUser={chooseUser}/>)}
            </div>

            {user && (<div>
                <UserDetails key={user.id} userDetail={user} addPosts={addPosts}/>
            </div>)}
            <div>
                {posts.map(value => <Posts key={value.id} post={value}/>)}
            </div>



        </div>
    );
};

export default Users;