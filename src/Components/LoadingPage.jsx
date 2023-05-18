import { useContext } from "react";
import { Bars } from "react-loader-spinner";
import { AuthContext } from "../provider/AuthProvider";

const LoadingPage = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen w-screen">
        <Bars
          height="80"
          width="80"
          color="#000"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else return children;
};

export default LoadingPage;
