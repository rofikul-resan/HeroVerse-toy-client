import AdsSection from "./AdsSection";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import ReviewSection from "./ReviewSection";
import ShopByCategory from "./ShopCategory/ShopByCategory";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <PhotoGallery />
      <AdsSection />
      <ShopByCategory />
      <ReviewSection />
    </div>
  );
};

export default Home;
