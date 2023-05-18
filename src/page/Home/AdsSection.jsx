import img1 from "../../img/banner_img1.jpg";
import img2 from "../../img/banner_img2.jpg";
import offerImg from "../../img/offerbg.png";
const AdsSection = () => {
  return (
    <section>
      <div className="overflow-hidden h-96 bg-[#9363b5] mb-16 relative">
        <img src={offerImg} alt="" className="h-full mx-auto rounded-md " />
        <div className="text-white absolute z-10 inset-0 flex items-center justify-center">
          <div className=" space-y-6">
            <h3 className="font-bold text-center">
              Exclusive Sale On HeroVers
            </h3>
            <h1 className="font-bold text-center text-5xl">
              Trendy Kids Toys 2023
            </h1>
            <h3 className="font-bold text-center ">
              Get Up To <span className="animate-pulse">40% Off</span> Available
            </h3>

            <button className="btn btn-outline btn-success rounded-none ml-60">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-9">
        <div className="h-[340px] md:w-[560px] overflow-hidden rounded-md relative">
          <img src={img1} alt="" />
          <div className="absolute z-10 right-10 top-1/3 space-y-4">
            <p className="text-black font-semibold ">New Brand Collection</p>
            <h3 className="text-pink-800 font-bold">Baby Favorite Toys</h3>
            <button className="btn border-none bg-pink-400 hover:bg-pink-600 text-white">
              {" "}
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-[340px] md:w-[560px] overflow-hidden rounded-md relative">
          <img src={img2} alt="" />
          <div className="absolute z-10 left-10 top-1/3 space-y-4">
            <p className="text-black font-semibold ">Just For You!</p>
            <h2 className="text-[#fc7756] font-bold">25% Off</h2>
            <button className="btn bg-[#fc7756] hover:bg-[#bb5137] text-white">
              {" "}
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
