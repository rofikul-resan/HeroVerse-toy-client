import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import MyToyRow from "./MyToyRow";
import useUpdateTitle from "../../Hook/useUpdateTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [toysTotal, setToysTotal] = useState([]);
  const [url, setUrl] = useState("");
  useUpdateTitle("My toys");
  useEffect(() => {
    fetch(
      url ||
        `https://hero-versa-toy-server.vercel.app/my-toys?email=${user?.email}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, url]);

  useEffect(() => {
    fetch(
      `https://hero-versa-toy-server.vercel.app/my-toys-total?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setToysTotal(data.total));
  });

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hero-versa-toy-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remain = toys.filter((toy) => toy._id !== id);
              setToys(remain);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <div>
      <div className="relative">
        <p className="my-4 text-xl md:text-4xl border-b-2 mx-auto px-4 pb-2 shadow-md w-fit  ">
          Toy You added {toysTotal} Item
        </p>
        <div className="flex gap-2 items-center md:absolute top-4 right-4">
          <h4>Sort Price </h4>
          <select
            onChange={(e) => {
              setUrl(
                `https://hero-versa-toy-server.vercel.app/my-toys?email=${user?.email}&limit=20&sort=${e.target.value}`
              );
            }}
            className="select select-bordered select-sm"
          >
            <option value="ascending">Ascending </option>
            <option value="descending">Descending </option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto mb-16 mt-8 flex justify-between relative">
        <table className="table table-zebra  md:w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="w-fit text-center"> Details</th>
              <th className="w-20 text-center"> Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {toys.map((toy) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
