import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Auth/Login";
import SingUp from "../page/Auth/SingUp";
import Error404 from "../Components/Error404";
import AddToy from "../page/AddToy/AddToy";
import ToyDetails from "../page/Home/toyDetails/ToyDetails";
import AllToys from "../page/allToys/AllToys";

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
        path: "/add-toy",
        element: <AddToy />,
      },
      {
        path: "/all-toy",
        element: <AllToys />,
      },
      {
        path: "/toys/:id",
        element: <ToyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
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
