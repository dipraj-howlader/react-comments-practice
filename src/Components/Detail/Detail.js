import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const [posts, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])
    console.log(posts)
    const {id} = useParams()
    return (
        <div>
            <h3> ID number {id}</h3>
            <h1>Title : {posts.title}</h1>
            <p>Description : {posts.body}</p>
            <p>Number of comments : {comments.length}</p>
            {
                comments.map(comment => (
                    <div>
                        <h6>Comment : {comment.body}</h6>
                    </div>
                ))
            }
        </div>
    );
};

export default Detail;