import { Link } from "react-router-dom";
import gif from "../img/error404.gif";
import { AiFillHome } from "react-icons/ai";
const Error404 = () => {
  return (
    <div className="grid md:grid-cols-2 gap-14 place-items-center h-screen">
      <div>
        <img className="h-96 rounded-lg shadow-lg " src={gif} alt="" />
      </div>
      <div className=" text-center">
        <p className="text-8xl text-slate-300">OPPOSE!</p>
        <h1 className="text-7xl font-black -mt-12 mb-8">404</h1>
        <Link to={"/"} className="btn btn-primary w-60 mb-8 ">
          {" "}
          Go Home <AiFillHome className="ml-4 text-xl" />
        </Link>
        <h1 className="mb-4">Page not found ??. Baby Crying </h1>
      </div>
    </div>
  );
};

export default Error404;
