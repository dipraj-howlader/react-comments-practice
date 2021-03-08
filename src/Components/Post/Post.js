import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Post = (props) => {
    const history = useHistory();
    const {id, title, body} = props.post;
    const showComments = (id) => {
        const url = `post/${id}`
        history.push(url);
    }
    return (
        <div style={{border:'1px solid green'}}>
            <p>Post ID: {id}</p>
            <h1>{title}</h1>
            <h4>{body}</h4>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;