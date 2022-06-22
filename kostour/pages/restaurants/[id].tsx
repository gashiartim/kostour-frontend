import Header from "../../src/components/Header/Header";
import Details from "../../src/components/Restaurant/Details";
import Gallery from "../../src/components/Restaurant/Gallery";
import { Carousel } from "../../src/components/shared/Carousel/Carousel";
import { useRestaurant } from "../../src/lib/hooks/queries/useRestaurant";
import { useRouter } from "next/router";

const Restaurant = () => {
  const { query } = useRouter();
  const restaurantId = query.id as string;
  const { data } = useRestaurant(restaurantId || "");
  console.log({ data });

  return (
    <>
      <div>
        <Carousel showArrows={false} banner className="w-[100%]" />
        <div className="lg:h-[300px] h-[150px] relative -bottom-[60px]  lg:-bottom-[270px]  left-[calc(-50vw+50%)] w-[calc(100vw-0px)] bg-gradient-to-t  from-black"></div>
      </div>

      <Details
        name={data?.name}
        description={data?.description}
        id={data?.id}
        whatCanYouDo={data?.whatCanYouDo}
        open_hours={data?.open_hours}
        className="lg:mt-[555px]"
      />
      <Gallery href="restaurants" />
    </>
  );
};

export default Restaurant;
