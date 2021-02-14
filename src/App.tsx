import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState<any>([]);

  const getPostst = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(posts);
    setPosts(posts.data);
  };

  useEffect(() => {
    getPostst();
  }, []);

  return (
    <div className="App">
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
