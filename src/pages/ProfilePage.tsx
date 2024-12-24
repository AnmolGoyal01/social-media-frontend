// src/pages/ProfilePage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // ShadCN button component
// import { Post } from '@/components'; // Assuming Post component is for rendering posts

interface UserProfile {
  username: string;
  fullName: string;
  bio: string;
  avatar: string;
  posts: string[]; // Placeholder for post IDs or URLs
  followersCount: number;
  followingCount: number;
  isFollowing: boolean;
}

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>(); // Get the username from URL params
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    // Fetch user data based on the username
    // Placeholder fetch; replace it with actual API call
    const fetchUserData = async () => {
      const userData = {
        username : username || 'loggedin_user',
        fullName: 'John Doe',
        bio: 'Explorer of the world 🌍',
        avatar: 'https://i.pravatar.cc/150?img=1',
        posts: [
          'https://via.placeholder.com/200x200',
          'https://via.placeholder.com/200x200',
          'https://via.placeholder.com/200x200',
          'https://via.placeholder.com/200x200',
          'https://via.placeholder.com/200x200',
        ],
        followersCount: 1200,
        followingCount: 150,
        isFollowing: false,
      };
      setUser(userData);
      setIsFollowing(userData.isFollowing);
    };
    
    fetchUserData();
  }, [username]);

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Upper Half: Profile Info */}
      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg mb-6">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
        />
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">{user.username}</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{user.fullName}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{user.bio}</p>
        
        {/* Follow/Unfollow Button */}
        {username !== 'loggedin_user' ? (
          <Button onClick={toggleFollow} className="bg-blue-500 text-white p-2 rounded-lg">
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        ) : (
          <Button className="bg-green-500 text-white p-2 rounded-lg">Edit Profile</Button>
        )}
        
        {/* Stats */}
        <div className="flex gap-6 mt-4">
          <div>
            <span className="font-semibold">{user.posts.length}</span> Posts
          </div>
          <div>
            <span className="font-semibold">{user.followersCount}</span> Followers
          </div>
          <div>
            <span className="font-semibold">{user.followingCount}</span> Following
          </div>
        </div>
      </div>

      {/* Lower Half: Posts Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {user.posts.length > 0 ? (
          user.posts.map((postUrl, index) => (
            <img key={index} src={postUrl} alt={`Post ${index}`} className="w-full h-40 object-cover rounded-lg" />
          ))
        ) : (
          <div className="col-span-3 text-center text-zinc-500 dark:zinc-400 text-3xl">
            No Posts
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
