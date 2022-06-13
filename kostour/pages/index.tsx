import FAQ from "../src/components/FAQ/FAQ";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import PopulatLocations from "../src/components/PopularLocations/PopularLocations";
import SearchByActivities from "../src/components/SearchByActivities/SearchByActivities";
import Banner from "../src/components/shared/Banner/Banner";
import SandwichMenu from "../src/components/shared/SandwichMenu/SandwichMenu";
import { useWindowWidth } from "../src/lib/hooks/useWindowWidth";

const Home = () => {
  const { mobile } = useWindowWidth();
  return (
    <div className="bg-black">
      {mobile ? <SandwichMenu /> : <Header />}
      <Banner />
      <PopulatLocations />
      <SearchByActivities />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
