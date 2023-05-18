import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import ReqLoading from "../../Components/ReqLoading";
const Login = () => {
  const { login } = useContext(AuthContext);
  const [reqLoading, setReqLoading] = useState(false);
  const handleLogIn = (event) => {
    event.preventDefault();
    setReqLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        setReqLoading(false);
      })
      .catch((err) => {
        setReqLoading(false);
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
            footer: "<p>Try again</p>",
          });
        }
        console.dir(err);
      });
  };
  return (
    <div className="bg-violet-600/10 w-11/12 rounded-lg  px-12 py-8 space-y-6 shadow-lg shadow-gray-400">
      {reqLoading && <ReqLoading />}
      <form onSubmit={handleLogIn}>
        <h1 className="my-4 text-center font-bold">Log in !</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <button className="btn btn-success btn-block mt-6" type="submit">
            Login <BiLogIn className="text-xl ml-3" />
          </button>
        </div>
      </form>
      <div>
        <p>
          Do not Have an account ?{" "}
          <Link to={"/auth/sing-up"} className="link link-hover link-primary">
            Sing Up
          </Link>{" "}
        </p>
      </div>
      <div>
        <div>
          <p className="text-center border-b border-black"></p>
          <h1 className="text-center my-5 font-semibold "> Login With </h1>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
