import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import getPostsById from "../../services/post.service";
import Post from "../Post/Post";

import css from './posts.css'

const Posts = () => {

const [posts,setPosts] = useState([]);

const {id} = useParams();


useEffect(()=>{
    getPostsById(id).then(value => setPosts([...value]))
},[])

    return (
        <div className={'posts'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;