import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealingBlog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/blog-posts')
      .then(response => setPosts(response.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/blog-posts', newPost);
      setPosts([response.data, ...posts]);
      setNewPost({ title: '', content: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Healing Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Blog Post Title"
        />
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          placeholder="Write your post here"
        />
        <button type="submit">Publish</button>
      </form>

      <h3>Recent Posts</h3>
      {posts.map((post, idx) => (
        <div key={idx} style={{ marginBottom: '15px' }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HealingBlog;
