import { useEffect, useState } from "react";
import ToyCard from "../../../Components/ToyCard";

const CategoryContener = ({ category }) => {
  const [limit, setLimit] = useState(6);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${category}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category, limit]);
  return (
    <div>
      <h1 className="text-center font-bold my-6">
        <span className="uppercase">{category}</span> Super Hero Toys
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
      {limit <= 6 && (
        <button
          onClick={() => setLimit(100)}
          className="btn btn-success mx-auto block mt-4"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default CategoryContener;
