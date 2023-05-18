import { RotatingSquare } from "react-loader-spinner";

const ReqLoading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full inset-0 bg-black/70 absolute">
      <RotatingSquare
        height="100"
        width="100"
        color="#fff"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default ReqLoading;
