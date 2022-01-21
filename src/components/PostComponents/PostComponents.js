import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import ApiService from "../../services/api.service";
import PostComponent from "../PostComponent/PostComponent";
import css from './postComponents.css'

const PostComponents = () => {
    const apiService = new ApiService('posts');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        apiService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'post_wrap'}>
            <div>
                {posts.map(post => <PostComponent key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostComponents;