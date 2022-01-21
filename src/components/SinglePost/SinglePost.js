import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import getPostsById from "../../services/post.service";
import PostInformation from "../PostInformation/PostInformation";

const SinglePost = () => {

    const [post,setPost] = useState(null);

    const {id} = useParams();

    const {state} = useLocation();


    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        getPostsById(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {post && <PostInformation post={post}/>}
        </div>
    );
};

export default SinglePost;