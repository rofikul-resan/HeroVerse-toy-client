// import { useContext } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // const { googleLogin } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();
  // const from = location.state;
  // const handleGoogleLogin = () => {
  //   googleLogin()
  //     .then(() => {
  //       navigate(from || "/");
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="from-control flex gap-4 text-primary justify-center">
      <button onClick="">
        <BsGoogle className="btn btn-circle btn-ghost p-2" />
      </button>
      <button>
        <BsGithub className="btn btn-circle btn-ghost p-2" />
      </button>
      <button>
        <BsFacebook className="btn btn-circle btn-ghost p-2" />
      </button>
    </div>
  );
};

export default SocialLogin;
