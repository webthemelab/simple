import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setPost(data));
    }, [id])
    return (
        <div>
            <h3>This post Detail:{id}</h3>
            <p>User posted:{post.id}</p>
        </div>
    );
};

export default PostDetail;