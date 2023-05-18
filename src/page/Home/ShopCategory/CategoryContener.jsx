import { useEffect, useState } from "react";
import ToyCard from "../../../Components/ToyCard";

const CategoryContener = ({ category }) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);
  return (
    <div>
      <h1 className="text-center font-bold my-6">
        <span className="uppercase">{category}</span> Super Hero Toys
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContener;
