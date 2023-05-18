import AdsSection from "./AdsSection";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import ShopByCategory from "./ShopCategory/ShopByCategory";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <PhotoGallery />
      <AdsSection />
      <ShopByCategory />
    </div>
  );
};

export default Home;
