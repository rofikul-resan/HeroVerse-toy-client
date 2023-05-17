import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
