import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/post.slice";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const {posts, status, errors} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div>
            {status === 'pending' && <h4>{status}</h4>}
            {errors && <h2>{errors}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;