import { useContext, useEffect, useRef, useState } from "react";
import ToyRow from "./ToyRow";
import { AuthContext } from "../../provider/AuthProvider";
import { BiSearchAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import ReqLoading from "../../Components/ReqLoading";

const AllToys = () => {
  const searchText = useRef("");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState("");
  useEffect(() => {
    fetch(url || `http://localhost:5000/toys?limit=20&skip=${(page + 1) * 20}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          Swal.fire({
            icon: "error",
            title: "No Data Find",
            text: "please Search again",
          });
          setUrl(`http://localhost:5000/toys?limit=20&skip=${(page + 1) * 20}`);
        }
        setToys(data);
      });
  }, [page, url]);

  const handleSearch = () => {
    const searchValue = searchText.current.value;
    if (searchValue) {
      setUrl(`http://localhost:5000/toys-name/${searchValue}?limit=20`);
    } else {
      setUrl(`http://localhost:5000/toys?limit=20&skip=${(page + 1) * 20}`);
    }
    console.log(searchValue);
  };

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
        {user ? (
          <div className="px-3 hidden md:block space-y-2 border border-gray-600 h-fit py-6 ml-2 bg-sky-100 ">
            <div className="h-20 w-20">
              <img src={user?.photoURL} alt="" className="rounded-md" />
            </div>
            <h4>
              <span className="font-semibold italic">Name : </span>
              {user?.displayName}
            </h4>
            <p className="text-sm">
              <span className="font-semibold italic">Email : </span>
              {user?.email}
            </p>
          </div>
        ) : (
          <div></div>
        )}
        {toys.length === 0 ? (
          <div className="md:w-10/12 relative">
            <ReqLoading />
          </div>
        ) : (
          <table className="table table-zebra  md:w-10/12 ">
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
                <ToyRow key={toy._id} toy={toy} index={i + page * 20} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllToys;
