import img1 from "../../img/banner1.jpg";
import img2 from "../../img/banner2.jpg";
import img3 from "../../img/banner3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { AiOutlineArrowRight } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="h-[500px] mb-16 relative overflow-hidden rounded-lg">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <img src={img1} className="w-full" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full" alt="" />{" "}
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 bg-black/80 z-10 text-white  md:px-16  ">
        <div className="w-2/5 space-y-8">
          <h1 className=" text-6xl font-bold mt-20">
            Welcome <br /> Our toy store
          </h1>
          <p>
            Toy Shop Banner Templates with Cute Baby Toys Pattern and Place for
            Text, Design Element Can Be Used for Card, Label, Invitation,
            Certificate, Flyer, Coupon, Tag
          </p>
          <div>
            <button className="btn btn-primary rounded-none mr-3 w-44 ">
              About Us
            </button>
            <button className="btn btn-outline btn-success rounded-none w-44 ">
              Our Product <AiOutlineArrowRight className="ml-auto text-xl" />
            </button>
          </div>
        </div>
        <div className="absolute -bottom-40 right-40">
          <img
            src="https://i.ibb.co/0GnhRbH/image-downloader-1678209495361.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
