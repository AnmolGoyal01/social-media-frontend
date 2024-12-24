// src/components/Feed.tsx
import React from "react"
import {Post} from "./"

const Feed: React.FC = () => {
  // Dummy data for posts
  const posts = [
    {
      username: "john_doe",
      userIcon: "https://i.pravatar.cc/150?img=3",
      postImage: "https://via.placeholder.com/800x400",
      caption: "Loving the sunset! 🌅",
      datePosted: "2 hours ago",
      likes: 120,
      comments: 18,
    },
    {
      username: "jane_smith",
      userIcon: "https://i.pravatar.cc/150?img=4",
      postImage: "https://via.placeholder.com/800x450",
      caption: "Exploring the mountains 🏔️",
      datePosted: "5 hours ago",
      likes: 300,
      comments: 45,
    },
    {
      username: "chris_rock",
      userIcon: "https://i.pravatar.cc/150?img=6",
      postImage: "https://via.placeholder.com/800x600",
      caption: "Beach vibes 🌊☀️",
      datePosted: "1 day ago",
      likes: 215,
      comments: 32,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  )
}

export default Feed
