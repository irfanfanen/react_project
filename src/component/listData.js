import React, { useState, useEffect } from 'react';

function ListData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data));
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListData;
