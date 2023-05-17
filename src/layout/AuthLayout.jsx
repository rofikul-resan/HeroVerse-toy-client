import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-evenly items-start my-32">
        <div>
          <img
            src="https://i.ibb.co/M9V4ptS/Super-Hero-PNG-File-Copy.png"
            alt=""
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
