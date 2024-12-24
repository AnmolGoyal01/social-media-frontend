import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";
import { authService, userService } from "./backend-connection";
import { login, logout } from "./redux/slices/userSlice";

function AppLayout() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  // for switching theme
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    if (darkMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch(logout());
        const user = await authService.getCurrentUser();
        if (user.sucess) {
          console.log(user);
          dispatch(login(user.data));
        }
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <header className="w-full p-1 md:hidden flex items-center justify-center text-4xl pt-3 ">
        Instagram
      </header>
      <div className="flex min-h-screen">
        <div className="w-1/5 hidden md:block sticky top-0 h-screen">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
