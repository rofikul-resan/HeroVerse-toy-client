import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivetRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    Swal.fire({
      title: "You have to log in first",
      text: "Only logged user can see this page",
      icon: "warning",
      confirmButtonColor: "#3085d6",
    });
    return <Navigate to={"/auth/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivetRouter;
