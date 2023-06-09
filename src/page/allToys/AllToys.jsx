import { useEffect, useRef, useState } from "react";
import ToyRow from "./ToyRow";
import { BiSearchAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import ReqLoading from "../../Components/ReqLoading";
import useUpdateTitle from "../../Hook/useUpdateTitle";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const totalToyOnDb = useLoaderData();
  useUpdateTitle("All Toys");
  const searchText = useRef("");
  const [toys, setToys] = useState([]);
  const [page, setPage] = useState(0);
  const [totalToy, setTotalToy] = useState(totalToyOnDb.total);
  const [limit, setLimit] = useState(20);
  const [url, setUrl] = useState("");
  const totalPage = Math.ceil(+totalToy / +limit);
  console.log(totalToy);
  useEffect(() => {
    fetch(
      url ||
        `https://hero-versa-toy-server.vercel.app/toys?limit=${limit}&skip=${
          page * limit
        }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          Swal.fire({
            icon: "error",
            title: "No Data Find",
            text: "please Search again",
          });
          setUrl(
            `https://hero-versa-toy-server.vercel.app/toys?limit=${limit}&skip=${
              page * 20
            }`
          );
        }
        setToys(data);
      });
  }, [page, url, limit]);

  const handleSearch = () => {
    const searchValue = searchText.current.value;
    if (searchValue) {
      setLimit(20);
      setPage(0);
      setUrl(
        `https://hero-versa-toy-server.vercel.app/toys-name/${searchValue}?limit=20`
      );
    } else {
      setUrl(
        `https://hero-versa-toy-server.vercel.app/toys?limit=${limit}&skip=${
          page * limit
        }`
      );
      console.log("click");
    }
  };

  //use for if search result 0 pagination can  work
  useEffect(() => {
    setUrl(
      `https://hero-versa-toy-server.vercel.app/toys?limit=${limit}&skip=${
        page * limit
      }`
    );
  }, [page, limit]);
  return (
    <div>
      <div className="mt-6 w-fit mx-auto flex gap-3">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Search Toy"
          ref={searchText}
        />{" "}
        <button onClick={handleSearch} className="btn btn-primary gap-2">
          <BiSearchAlt /> Search
        </button>
      </div>
      <div className="overflow-x-auto mb-16 mt-8 flex justify-between relative">
        {toys.length === 0 ? (
          <div className="md:w-11/12 h-60 mx-auto relative">
            <ReqLoading />
          </div>
        ) : (
          <table className="table table-zebra mx-auto md:w-11/12 ">
            {/* head */}
            <thead>
              <tr>
                <th>No .</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th className="w-20"> Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {toys.map((toy, i) => (
                <ToyRow key={toy._id} toy={toy} index={i + page * limit} />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex gap-4 mb-5 w-fit mx-auto">
        <div className="btn-group">
          {[...Array(totalPage).keys()].map((btnNo) => (
            <button
              onClick={() => setPage(btnNo)}
              className={`btn btn-sm btn-accent ${
                btnNo === page && "btn-active"
              }`}
              key={btnNo}
            >
              {btnNo + 1}
            </button>
          ))}
        </div>
        <div>
          <select
            className="select select-bordered select-sm"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="20">20</option>
            <option value="15">15</option>
            <option value="10">10</option>
            <option value="5">5</option>
          </select>{" "}
          <span className="font-semibold ml-2"> Per page</span>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
