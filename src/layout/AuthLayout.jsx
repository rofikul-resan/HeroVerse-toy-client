import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2  items-center my-16">
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/M9V4ptS/Super-Hero-PNG-File-Copy.png"
            alt=""
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
