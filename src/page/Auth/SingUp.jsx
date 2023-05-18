import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { BiLogIn } from "react-icons/bi";

const SingUp = () => {
  return (
    <div>
      <div className="bg-violet-600/10 w-11/12 rounded-lg  px-12 py-8 space-y-6">
        <form>
          <h1 className="my-4 text-center font-bold">Sing Up !</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Name
              </span>
            </label>
            <input
              type="email"
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
              name="photoUrl"
              className="input input-bordered bg-white"
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
