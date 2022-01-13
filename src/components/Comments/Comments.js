import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/comments.service";
import Comment from "../Comment/Comment";

const Comments = () => {

    let [comments,setComments] = useState([]);

    useEffect(()=>{
        getComments().then(comments => {
            setComments(comments)
        })
    },[])
    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;