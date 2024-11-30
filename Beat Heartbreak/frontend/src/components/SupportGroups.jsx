import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/SupportGroups.css';

const SupportGroups = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/support-posts', {
          headers: { 'x-auth-token': token },
        });
        setPosts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, [token]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/support-posts',
        { content: newPost },
        { headers: { 'x-auth-token': token } }
      );
      setPosts([response.data, ...posts]);
      setNewPost('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Support Groups</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts or ask for support..."
        />
        <button type="submit">Post</button>
      </form>
      <h3>Discussion Posts</h3>
      {posts.map((post, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SupportGroups;
