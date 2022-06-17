import FAQ from "../src/components/FAQ/FAQ";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import PopularLocations from "../src/components/PopularLocations/PopularLocations";
import SearchByActivities from "../src/components/SearchByActivities/SearchByActivities";
import Banner from "../src/components/shared/Banner/Banner";
import Container from "../src/components/shared/Container/Container";
import SandwichMenu from "../src/components/shared/SandwichMenu/SandwichMenu";
import { useWindowWidth } from "../src/lib/hooks/useWindowWidth";

const Home = () => {
  const { mobile } = useWindowWidth();
  return (
    <>
      <Banner />
      <PopularLocations />
      <SearchByActivities />
      <FAQ />
    </>
  );
};

export default Home;
