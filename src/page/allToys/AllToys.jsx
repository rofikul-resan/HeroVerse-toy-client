import { useContext, useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import { AuthContext } from "../../provider/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?limit=${(page + 1) * 20}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [page]);

  return (
    <div>
      <div className="overflow-x-auto my-16 flex justify-between relative">
        <div className="px-3 hidden md:block space-y-2 border border-gray-600 h-fit py-6 ml-2 bg-sky-100 ">
          <div className="h-20 w-20">
            <img src={user.photoURL} alt="" className="rounded-md" />
          </div>
          <h4>
            <span className="font-semibold italic">Name : </span>
            {user.displayName}
          </h4>
          <p className="text-sm">
            <span className="font-semibold italic">Email : </span>
            {user.email}
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default AllToys;
