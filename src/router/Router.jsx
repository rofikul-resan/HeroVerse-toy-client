import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Auth/Login";
import SingUp from "../page/Auth/SingUp";
import Error404 from "../Components/Error404";
import AddToy from "../Components/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-toy",
        element: <AddToy />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sing-up",
        element: <SingUp />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
