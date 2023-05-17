import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
