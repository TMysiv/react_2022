import React, {useState} from 'react';

import './infoUsers.css'

import Users from "../Users/Users";
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";
import {getPostsById} from "../../services/posts.service";

const InfoUsers = () => {

    let [userDetails, setUserDetails] = useState(null);
    let [post, setPost] = useState([]);

    const getDetails = (user) => {
        setUserDetails(user)
        setPost([])
    }

    const getUserId = (id) => {
        getPostsById(id).then(value => {
            setPost(value)
        })
    }

    return (
        <div className={'wrap'}>

            <div className={'users'}>
                <Users getDetails={getDetails}/>
            </div>

            <div className={'userDetails'}>
                {userDetails && (<UserDetails userDetails={userDetails} getUserId={getUserId}/>)}
            </div>

            <div className={'posts'}>
                {post && <Posts post={post}/>}
            </div>
        </div>
    );
};

export default InfoUsers;