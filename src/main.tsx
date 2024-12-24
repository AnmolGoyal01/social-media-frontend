import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, ProfilePage, LoginPage, SignupPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/:username",
    element: <AppLayout />,
    children: [{ path: "", element: <ProfilePage /> }],
  },
  {

  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
