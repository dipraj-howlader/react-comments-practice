import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
   const [posts, setPost] =  useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h3>this is home</h3>
            <p>Post is : {posts.length}</p>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;