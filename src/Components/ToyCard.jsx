import { Link } from "react-router-dom";
import RatingCom from "./RatingCom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ToyCard = ({ toy }) => {
  const { _id, name, price, pictureURL, rating } = toy;
  const aso = () => {
    const code = Math.ceil(Math.random() * 10);
    if (code === 1) return "fade-down";
    else if (code === 2) {
      return "zoom-in-up";
    } else if (code === 3) {
      return "zoom-in";
    } else if (code === 4) {
      return "flip-up";
    } else if (code === 5) {
      return "fade-up";
    } else if (code === 6) {
      return "zoom-out-right";
    } else if (code === 7) {
      return "fade-down";
    } else if (code === 8) {
      return "fade-down-left";
    } else if (code === 9) {
      return "fade-down-right";
    } else return "fade-down";
  };
  return (
    <div
      data-aos={aso()}
      data-aos-duration="1000"
      className="card  bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={pictureURL} alt={name} className="rounded-xl h-[250px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price : $ {price}</p>
        <div className="text-xl flex items-center gap-2">
          <RatingCom>{rating}</RatingCom> <span> {rating}</span>
        </div>
        <div className="card-actions">
          <Link to={`/toy/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
