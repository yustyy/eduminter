import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user'); // API URL'nizi buraya ekleyin
        setUser(response.data);
      } catch (error) {
        console.error("There was an error fetching the user data!", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileCard name={user.userName} imageSrc={user.imageUrl} />
      <div className="mt-4">
        <p>Email: {user.email}</p>
        <p>Role: {user.userRole}</p>
      </div>
    </div>
  );
};

export default Profile;
