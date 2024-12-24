import React from "react";
import {
  Home,
  Search,
  Compass,
  PlayCircle,
  MessageSquare,
  Bell,
  Plus,
  User,
  SunMoon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((state : RootState) => state.theme.darkMode);
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: <Home />,
      onClick: () => {
        navigate("/");
      },
    },
    { label: "Search", icon: <Search /> },
    { label: "Explore", icon: <Compass /> },
    { label: "Reels", icon: <PlayCircle /> },
    { label: "Messages", icon: <MessageSquare /> },
    { label: "Notifications", icon: <Bell /> },
    { label: "Create", icon: <Plus /> },
    { label: "Profile", icon: <User /> },
    {
      label: `${darkMode ? "Dark" : "Light"} Mode`,
      icon: <SunMoon />,
      onClick: () => {
        dispatch(toggleTheme());
      },
    },
  ];

  return (
    <aside className="sticky top-0 h-screen w-20 lg:w-auto border-r bg-sidebarBg-light text-textPrimary-light dark:bg-sidebarBg-dark dark:text-textPrimary-dark transition-colors duration-300">
      <div className="m-8 text-center">
        <h1 className="text-2xl font-bold hidden lg:block">Instagram</h1>
        <h1 className="text-2xl font-bold lg:hidden">IG</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center justify-center lg:justify-start gap-4 px-5 py-2 hover:bg-gray-100 dark:hover:bg-zinc-900"
            onClick={item.onClick}
          >
            <div className="scale-[1.4]">{item.icon}</div>
            <span className="hidden lg:block">{item.label}</span>
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
