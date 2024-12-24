// src/components/Post.tsx
import React from "react"
import { Heart, MessageCircle, Share, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button" // ShadCN button component

type PostProps = {
  username: string
  userIcon: string // URL for the user's profile picture
  postImage: string // URL for the post image
  caption: string
  datePosted: string // Date in string format (e.g., "2 hours ago")
  likes: number
  comments: number
}

const Post: React.FC<PostProps> = ({
  username,
  userIcon,
  postImage,
  caption,
  datePosted,
  likes,
  comments,
}) => {
  return (
    <div className="rounded-md border shadow-sm transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={userIcon}
          alt={`${username}'s profile`}
          className="h-10 w-10 rounded-full border dark:border-zinc-700"
        />
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          {username}
        </span>
      </div>

      {/* Post Image */}
      <div className="w-full">
        <img
          src={postImage}
          alt="Post"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-4">
          <Button variant="ghost" className="p-2 text-zinc-600 dark:text-zinc-300">
            <Heart />
          </Button>
          <Button variant="ghost" className="p-2 text-zinc-600 dark:text-zinc-300">
            <MessageCircle />
          </Button>
          <Button variant="ghost" className="p-2 text-zinc-600 dark:text-zinc-300">
            <Share />
          </Button>
        </div>
        <Button variant="ghost" className="p-2 text-zinc-600 dark:text-zinc-300">
          <Bookmark />
        </Button>
      </div>

      {/* Likes, Caption, and Date */}
      <div className="px-4 py-2 text-sm">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">{likes} likes</p>
        <p className="mt-1 text-zinc-700 dark:text-zinc-300">
          <span className="font-semibold">{username}</span> {caption}
        </p>
        <button className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          View all {comments} comments
        </button>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{datePosted}</p>
      </div>
    </div>
  )
}

export default Post
