import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
    return (
    <div>
      <h1>hello world</h1>
      <ul>
        {posts.map((post,index)=>(
          <li key={index}>
            {post.title}
          </li>   
        ))}
      </ul>
    </div>
  );
}

export default App;
