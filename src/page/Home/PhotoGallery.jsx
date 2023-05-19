import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const PhotoGallery = () => {
  const imgGallery = [
    "https://i.ibb.co/pn7XxHR/1677502473392.png",
    "https://i.ibb.co/0r52GrR/149105-toy-superhero-avengers-hq-image-free-Copy.png",
    "https://i.ibb.co/rs3Fc7S/Mc-Farlane-Toys-DC-Multiverse-Animated-Series-The-Flash-7-Action-Figure-3.jpg",
    "https://i.ibb.co/crdLXq9/Mc-Farlane-Toys-DC-Multiverse-Black-Adam-with-Cloak-Black-Adam-Movie-Action-Figure.jpg",
    "https://i.ibb.co/BG79gVC/149155-batman-toy-superhero-free-clipart-hq-Copy.png",
    "https://i.ibb.co/99Jbcgz/149101-photos-toy-superhero-avengers-free-clipart-hd-Copy.png",
    "https://i.ibb.co/cYNmBWD/Superhero-Toy-PNG-Image-Copy.png",
    "https://i.ibb.co/M9V4ptS/Super-Hero-PNG-File-Copy.png",
  ];
  return (
    <div>
      <div className="md:w-1/2 text-center space-y-6 mb-12 mx-auto">
        <h1 className="font-bold">Our Toys Photo Gallery </h1>
        <p>
          In the Toy Photo Gallery section, you can showcase a collection of
          captivating and visually appealing images of your toys. Here are some
          ideas on what you can mention about the Toy Photo Gallery section
        </p>
      </div>
      <div className="grid w-9/12 mx-auto grid-cols-2 md:grid-cols-4 gap-3">
        {imgGallery.map((img, i) => (
          <div
            data-aos={i % 2 === 0 ? "fade-down-left" : "fade-up-right"}
            key={i}
            className="border rounded-md bg-base-200 hover:scale-[1.2]  "
          >
            {" "}
            <img className="" src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
