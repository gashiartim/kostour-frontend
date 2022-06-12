import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import { Carousel } from "../../src/components/shared/Carousel/Carousel";
// import rugove from "../../src//assets/images/Rugove.jpeg";
import { useLocation } from "../../src/lib/hooks/queries/useLocation";
import { useRouter } from "next/router";
import Details from "../../src/components/Restaurant/Details";
import Gallery from "../../src/components/Restaurant/Gallery";

const Location = () => {
  const { query } = useRouter();
  const locationId = query.id as string;

  const { data } = useLocation(locationId || "");

  return (
    <>
      <div className="bg-black ">
        <Header className="relative z-10" />

        <Carousel showArrows={false} banner className="w-[100%]" />
        <Details
          name={data?.name}
          description={data?.description}
          id={data?.id}
          whatCanYouDo={data?.whatCanYouDo}
        />
        <Gallery href="restaurant" />
        <Footer />
      </div>
    </>
  );
};
export default Location;
