import { useLoaderData } from "react-router-dom";
import RatingCom from "../../../Components/RatingCom";
import { BsPen } from "react-icons/bs";
import useUpdateTitle from "../../../Hook/useUpdateTitle";

const ToyDetails = () => {
  const toy = useLoaderData();
  useUpdateTitle(`Toy ${toy.name} Details`);
  const {
    subCategory,
    sellerName,
    sellerEmail,
    rating,
    price,
    pictureURL,
    name,
    description,
    availableQuantity,
  } = toy;
  console.log(toy);
  return (
    <div className="p-4">
      <div className="md:w-9/12 mx-auto grid md:grid-cols-2 gap-12 my-8 md:my-32">
        <div className="border border-black relative flex items-center">
          <img src={pictureURL} alt={name} className="mx-auto my-8" />
          <span className="badge badge-secondary font-semibold absolute top-4 left-4 z-10 uppercase">
            {" "}
            # {subCategory}
          </span>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold capitalize text-4xl md:text-6xl">
            {name} Toy
          </h2>
          <div className="flex items-center gap-3 md:text-2xl">
            <RatingCom>{rating}</RatingCom> <span>{rating} % Rating</span>{" "}
            <button className="link link-hover ml-8 gap-3 btn btn-outline">
              <BsPen /> Add Review
            </button>
          </div>
          <h2 className="text-pink-400 font-semibold">Price : $ {price}</h2>
          <p className="text-2xl font-semibold border-b-2 italic">
            Contact Info
          </p>
          <p>
            <span className="font-semibold">Seller Name :</span> {sellerName}
          </p>
          <p>
            <span className="font-semibold">Seller Email :</span> {sellerEmail}
          </p>
          <p>
            <span className="font-semibold">Available Quantity :</span>{" "}
            {availableQuantity} Pics
          </p>
          <p className="text-2xl font-semibold border-b-2 italic">Toy Info</p>{" "}
          <p>{description}</p>
          <button className="btn btn-secondary btn-block">Bye Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
