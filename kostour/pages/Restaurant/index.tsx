
import Header from "../../src/components/Header/Header";
import Banner from "../../src/components/Restaurant/Banner";
import Details from "../../src/components/Restaurant/Details";
import Gallery from "../../src/components/Restaurant/Gallery";
import Footer from "../../src/components/Footer/Footer";



const Restaurant = () => {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      <Details />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Restaurant;
