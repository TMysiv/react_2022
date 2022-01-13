import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/posts.service";
import Post from "../Post/Post";

const Posts = () => {

    let [posts,setPosts] = useState([]);

    useEffect( ()=>{
        getPosts().then(posts =>{
            setPosts(posts)
        })
    },[])


    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;