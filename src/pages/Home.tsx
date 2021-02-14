import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const preparePost = (postBody: string) => {
  if (postBody.length > 100) {
    const textArr = postBody.split('');
    textArr.length = 100;
    return textArr.join('') + '...';
  }
  return postBody;
};

function Home() {
  const [posts, setPosts] = useState<any>([]);

  const getPostst = async () => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

    setPosts(posts.data);
  };

  useEffect(() => {
    getPostst();
  }, []);

  return (
    <div className="App">
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
          <div>{preparePost(post.body)}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
