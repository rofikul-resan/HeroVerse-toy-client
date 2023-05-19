import { Link } from "react-router-dom";

const ToyRow = ({ toy, index }) => {
  const { name, sellerName, subCategory, price, quantity, _id } = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td className="font-semibold">{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link className="btn btn-success btn-md" to={`/toys/${_id}`}>
          View details{" "}
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
