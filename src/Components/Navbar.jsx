import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
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
          {user ? (
            <>
              <NavLink
                to={"/add-toy"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-sky-700" : ""
                }
              >
                Add Toys
              </NavLink>
              <NavLink
                to={"/my-toy"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-sky-700" : ""
                }
              >
                My Toys
              </NavLink>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      title={user?.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        logOut()
                          .then()
                          .catch((e) => console.log(e))
                      }
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
