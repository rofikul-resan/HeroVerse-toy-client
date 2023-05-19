import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { BiLogIn } from "react-icons/bi";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ReqLoading from "../../Components/ReqLoading";

const SingUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state;
  console.log(from);
  const { createUser, updateUser } = useContext(AuthContext);
  const [reqLoading, setReqLoading] = useState(false);
  const handleSingUP = (event) => {
    event.preventDefault();
    setReqLoading(true);
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoUrL = form.photo.value;
    const password = form.password.value;
    console.log(name, photoUrL, email, password);
    createUser(email, password)
      .then(() => {
        setReqLoading(false);
        updateUser(name, photoUrL)
          .then(() => {})
          .catch();
        Swal.fire({
          icon: "success",
          title: "Log in successful...",
        });
        navigate(from || "/");
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
    <div>
      {reqLoading && <ReqLoading />}
      <div className="bg-violet-600/10 w-11/12 rounded-lg  px-12 py-8 space-y-6">
        <form onSubmit={handleSingUP}>
          <h1 className="my-4 text-center font-bold">Sing Up !</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered bg-white"
            />
          </div>
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
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Photo Url
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Photo"
              name="photo"
              className="input input-bordered bg-white"
            />
          </div>
          <div className="form-control">
            <button className="btn btn-success btn-block mt-6" type="submit">
              Sing Up
              <BiLogIn className="text-xl ml-3" />
            </button>
          </div>
        </form>
        <div>
          <p>
            Already Have an account ?{" "}
            <Link to={"/auth/login"} className="link link-hover link-primary">
              Log in
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
    </div>
  );
};

export default SingUp;
