import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = ({ token }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { 'x-auth-token': token },
        });
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <div>
      <h2>Your Profile</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
