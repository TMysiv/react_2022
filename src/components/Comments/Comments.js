import React, {useEffect, useState} from 'react';
import getCommentsById from "../../services/commnets.service";
import {useParams} from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getCommentsById(id).then(value => setComments([...value]))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;