import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authService } from "../backend-connection";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

interface Suggestion {
  username: string;
  avatar: string;
  followersCount: number;
}

interface UserProfile {
  username: string | null;
  fullName: string | null;
  avatar: string;
}

const suggestions: Suggestion[] = [
  {
    username: "sarah_lee",
    avatar: "https://i.pravatar.cc/150?img=1",
    followersCount: 500,
  },
  {
    username: "alex_jones",
    avatar: "https://i.pravatar.cc/150?img=2",
    followersCount: 350,
  },
  {
    username: "jake_doe",
    avatar: "https://i.pravatar.cc/150?img=3",
    followersCount: 720,
  },
  {
    username: "emily_smith",
    avatar: "https://i.pravatar.cc/150?img=4",
    followersCount: 900,
  },
  {
    username: "michael_ross",
    avatar: "https://i.pravatar.cc/150?img=5",
    followersCount: 450,
  },
];

const Suggestions: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<UserProfile | null>(null);
  const loginUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(null);
    if (loginUser.isAuthenticated) {
      setLoggedInUser({
        username: loginUser.username,
        avatar: loginUser.avatar,
        fullName: loginUser.fullName,
      });
    }
  }, [loginUser]);

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  const loginHandler = () => {
    navigate("/login");
  }

  return (
    <div className="rounded-lg shadow-lg p-4 mb-6 mx-8 w-full max-w-xs">
      <div className="space-y-4 my-6">
        {loginUser?.isAuthenticated && loggedInUser ? (
          <div className="flex items-center justify-between space-x-12">
            <div className="flex items-center space-x-3">
              <img
                src={loggedInUser.avatar}
                alt={loggedInUser.username || "User"}
                className="w-10 h-10 rounded-full"
              />
              <div className="w-full">
                <p className="font-semibold text-zinc-800 dark:text-white">
                  {loggedInUser.username}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {loggedInUser.fullName}
                </p>
              </div>
            </div>
            <button
              className="text-blue-500 font-semibold hover:text-blue-900 dark:hover:text-white"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between space-x-12">
            <div className=" text-center">Login to use our app</div>
            <button
              className="text-blue-500 font-semibold hover:text-blue-900 dark:hover:text-white"
              onClick={loginHandler}
            >
              Login
            </button>
          </div>
        )}
      </div>
      <h2 className="text-md font-semibold mb-4 text-zinc-800 dark:text-white">
        Suggested for You
      </h2>
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-center justify-between space-x-12"
          >
            <div className="flex items-center space-x-3">
              <img
                src={suggestion.avatar}
                alt={suggestion.username}
                className="w-10 h-10 rounded-full"
              />
              <div className="w-full">
                <p className="font-semibold text-zinc-800 dark:text-white">
                  {suggestion.username}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {suggestion.followersCount} Followers
                </p>
              </div>
            </div>
            <button className="text-blue-500 font-semibold hover:text-blue-900 dark:hover:text-white">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
