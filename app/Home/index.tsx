import Banner from "./compnents/banner";
import RestaurantsList from "@/app/Home/compnents/popularrRstaurants";
import Partners from "./compnents/partner";

const Home = () => {
  return (
    <div>
      <Banner />
      <RestaurantsList />
      <Partners />
    </div>
  );
};

export default Home;
