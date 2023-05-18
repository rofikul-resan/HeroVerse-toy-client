import RatingCom from "../../Components/RatingCom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
const ReviewSection = () => {
  return (
    <div className="hidden md:block">
      <div className="md:w-1/2 text-center space-y-6 mb-12 mx-auto">
        <h1 className="font-bold">Peoples Review</h1>
        <p>
          {" "}
          In the Toy Photo Gallery section, you can showcase a collection of
          captivating and visually appealing images of your toys. Here are some
          ideas on what you can mention about the Toy Photo Gallery section
        </p>
      </div>
      <div className="w-10/12  mx-auto pb-14">
        <Swiper
          navigation={true}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="bg-sky-100 rounded-lg shadow-md shadow-gray-400 p-4">
              <img
                src="https://i.ibb.co/qxZWsGK/hd-thanos-transparent-png-31624814943abtr3swdmw.png"
                alt=""
                className="rounded-full h-32 w-32  mx-auto border-4 border-orange-500"
              />
              <div className="w-11/12 mx-auto text-center mt-2 space-y-3">
                <h2 className="font-bold"> John Alies</h2>
                <p>
                  In the Toy Photo Gallery section, you can showcase a
                  collection of captivating and visually appealing images of
                  your toys.
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Rating</span>{" "}
                    <RatingCom>4.5</RatingCom>{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="bg-sky-100 rounded-lg shadow-md shadow-gray-400 p-4">
              <img
                src="https://i.ibb.co/y4vXg1J/Spin-Master-6056691-INT-4-Copy.jpg"
                alt=""
                className="rounded-full h-32 w-32  mx-auto border-4 border-orange-500"
              />
              <div className="w-11/12 mx-auto text-center mt-2 space-y-3">
                <h2 className="font-bold"> Amber Alies</h2>
                <p>
                  In the Toy Photo Gallery section, you can showcase a
                  collection of captivating and visually appealing images of
                  your toys.
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Rating</span>{" "}
                    <RatingCom>4.5</RatingCom>{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="bg-sky-100 rounded-lg shadow-md shadow-gray-400 p-4">
              <img
                src="https://i.ibb.co/513v088/n-diana-prince-hot-toys-limited-armored-knight-dc-comics-fictional-character.png"
                alt=""
                className="rounded-full h-32 w-32  mx-auto border-4 border-orange-500"
              />
              <div className="w-11/12 mx-auto text-center mt-2 space-y-3">
                <h2 className="font-bold"> Josim Mia</h2>
                <p>
                  In the Toy Photo Gallery section, you can showcase a
                  collection of captivating and visually appealing images of
                  your toys.
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Rating</span>{" "}
                    <RatingCom>4.5</RatingCom>{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="bg-sky-100 rounded-lg shadow-md shadow-gray-400 p-4">
              <img
                src="https://i.ibb.co/6RK0fLn/images96-Copy.jpg"
                alt=""
                className="rounded-full h-32 w-32  mx-auto border-4 border-orange-500"
              />
              <div className="w-11/12 mx-auto text-center mt-2 space-y-3">
                <h2 className="font-bold"> Robert Darwen</h2>
                <p>
                  In the Toy Photo Gallery section, you can showcase a
                  collection of captivating and visually appealing images of
                  your toys.
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Rating</span>{" "}
                    <RatingCom>4.5</RatingCom>{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="bg-sky-100 rounded-lg shadow-md shadow-gray-400 p-4">
              <img
                src="https://i.ibb.co/qxZWsGK/hd-thanos-transparent-png-31624814943abtr3swdmw.png"
                alt=""
                className="rounded-full h-32 w-32  mx-auto border-4 border-orange-500"
              />
              <div className="w-11/12 mx-auto text-center mt-2 space-y-3">
                <h2 className="font-bold"> John Alies</h2>
                <p>
                  In the Toy Photo Gallery section, you can showcase a
                  collection of captivating and visually appealing images of
                  your toys.
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Rating</span>{" "}
                    <RatingCom>4.5</RatingCom>{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
