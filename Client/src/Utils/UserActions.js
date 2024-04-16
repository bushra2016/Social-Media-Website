import axios from "axios";
import getTokenConfig from './TokenUtils';
import { useState, useEffect } from 'react';

const useFollow = (userId) => {
  const [followed, setFollowed] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const currentUserId = currentUser._id;

  useEffect(() => {
    const isFollowing = currentUser?.following?.includes(userId) || false;
    setFollowed(isFollowing);
  }, [currentUser, userId]);

  const handleFollow = async () => {
    try {
      const config = getTokenConfig();
      if (!config) return;

      await axios.post(`/api/users/${userId}/follow`, { followerId: currentUserId, followeeId: userId }, config);

      currentUser.following.push(userId);
      localStorage.setItem('user', JSON.stringify(currentUser));
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const handleUnfollow = async () => {
    try {
      const config = getTokenConfig();
      if (!config) return;
      const requestBody = {
        followerId: currentUserId,
        followeeId: userId
      };

      await axios.delete(`/api/users/${userId}/unfollow`, { data: requestBody, ...config });
      const index = currentUser.following.indexOf(userId);
      if (index !== -1) {
        currentUser.following.splice(index, 1);
        localStorage.setItem('user', JSON.stringify(currentUser));
      }
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  return { followed, handleFollow, handleUnfollow };
};

export default useFollow;
