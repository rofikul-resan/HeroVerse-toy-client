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
      <td className="font-semibold">{name}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link className="btn btn-success btn-md" to={`/toys/${_id}`}>
          View details{" "}
        </Link>
      </td>
      <td>
        <button className="btn btn-success btn-md" to={`/toys/${_id}`}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
