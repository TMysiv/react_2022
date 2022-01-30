import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import Comment from "../../components/Comment/Comment";

const CommentsPage = () => {

    const {comments, status, errors} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {status === 'pending' && <h4>{status}</h4>}
            {errors && <h2>{errors}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;