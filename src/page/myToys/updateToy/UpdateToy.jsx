import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const [toy, setToy] = useState({});
  const {
    name,
    pictureURL,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;
  console.log(subCategory);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  const handelUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToy = { subCategory, price, rating, quantity, description };
    console.log(updatedToy);
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: " Update successful",
            timer: 1000,
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <img src={pictureURL} alt={name} className="mx-auto h-60" />
      <form
        onSubmit={handelUpdateToy}
        className="md:w-10/12 mb-20 mt-4 mx-auto px-14 py-6 rounded-lg bg-base-300"
      >
        <h1 className="text-center mb-3 capitalize ">{name}</h1>
        <div className="flex justify-evenly w-8/12 mx-auto my-4 border-b-2 border-black pb-2">
          <p>
            <span className="font-semibold italic"> Seller Name : </span>
            {sellerName}
          </p>
          <p>
            <span className="font-semibold italic"> Seller Email : </span>
            {sellerEmail}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Sub Category
              </span>
            </label>
            <select
              name="subCategory"
              defaultValue={subCategory}
              className="select select-bordered w-full bg-white"
              required
            >
              <option value={subCategory}> {subCategory}</option>
              <option value="marvel">Marvel</option>
              <option value="avenger">Avenger</option>
              <option value="dc">Dc</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Price
              </span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Available Quantity
              </span>
            </label>
            <input
              type="number"
              //   placeholder="Available Quantity"
              defaultValue={quantity}
              required
              name="quantity"
              className="input input-bordered bg-white"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text italic text-xl font-semibold">
                Rating
              </span>
            </label>
            <input
              type="number"
              //   placeholder="Available Quantity"
              defaultValue={rating}
              required
              name="rating"
              className="input input-bordered bg-white"
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            name="description"
            placeholder="Description"
            defaultValue={description}
            required
            className="h-60 w-full resize-none input input-bordered bg-white mt-8 p-6"
          ></textarea>
        </div>
        <button className="btn btn-success btn-block mt-6">Update</button>
      </form>
    </div>
  );
};

export default UpdateToy;
