import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Post(props: any) {
  const { id } = useParams<any>();
  const [post, setPost] = useState<any>([]);

  const getPostst = async () => {
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(posts.data);
  };

  useEffect(() => {
    if (id) {
      getPostst();
    }
  }, [id]);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
}

export default Post;
