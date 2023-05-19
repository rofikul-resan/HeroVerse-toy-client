import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDeleteToy }) => {
  const { name, sellerName, subCategory, price, quantity, _id, sellerEmail } =
    toy;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteToy(_id)}
          className="btn btn-circle bg-red-800 hover:bg-red-950"
        >
          <BsTrash className="text-white text-xl" />
        </button>
      </th>
      <td className="font-semibold capitalize">{name} Toy</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subCategory}</td>
      <td>$ {price}</td>
      <td>{quantity} Pics</td>
      <td>
        <div className="w-fit mx-auto">
          <Link
            className="btn btn-success btn-md mx-auto justify-center ml-auto"
            to={`/toys/${_id}`}
          >
            View details{" "}
          </Link>
        </div>
      </td>
      <td>
        <Link to={`/update-toy/${_id}`} className="btn btn-secondary">
          Update
        </Link>
      </td>
    </tr>
  );
};

export default MyToyRow;
