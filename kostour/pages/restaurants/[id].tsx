import Header from "../../src/components/Header/Header";
import Details from "../../src/components/Restaurant/Details";
import Gallery from "../../src/components/Restaurant/Gallery";
import Footer from "../../src/components/Footer/Footer";
import { Carousel } from "../../src/components/shared/Carousel/Carousel";
import { useRestaurant } from "../../src/lib/hooks/queries/useRestaurant";
import { useRouter } from "next/router";
import Container from "../../src/components/shared/Container/Container";

const Restaurant = () => {
  const { query } = useRouter();
  const restaurantId = query.id as string;
  const { data } = useRestaurant(restaurantId || "");
  return (
    <>
      <div>
        <Carousel showArrows={false} banner className="w-[100%]" />
      </div>

      <Details
        name={data?.name}
        description={data?.description}
        id={data?.id}
        whatCanYouDo={data?.whatCanYouDo}
        open_hours={data?.open_hours}
      />
      <Gallery href="restaurants" />
    </>
  );
};

export default Restaurant;
