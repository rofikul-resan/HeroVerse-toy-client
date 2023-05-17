import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-base-200 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center p-5">
        <div className="w-fit">
          <img className="w-[100px] mx-auto" src="/logo.svg" alt="logo" />
          <h2 className="font-bold text-black">HeroVerse Toys</h2>
        </div>
        <div className="flex gap-6 text-lg  md:items-center font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-sky-700" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/all-toy"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-sky-700" : ""
            }
          >
            All Toys
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-sky-700" : ""
            }
          >
            Blog
          </NavLink>
          {location.pathname !== "/auth/login" ? (
            <Link to={"/auth/login"} className="btn btn-primary">
              {" "}
              Log in
            </Link>
          ) : (
            <Link to={"/auth/sing-up"} className="btn btn-success">
              {" "}
              Sing Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
