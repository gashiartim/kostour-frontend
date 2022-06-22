import { Carousel } from "../../src/components/shared/Carousel/Carousel";
// import rugove from "../../src//assets/images/Rugove.jpeg";
import { useLocation } from "../../src/lib/hooks/queries/useLocation";
import { useRouter } from "next/router";
import Details from "../../src/components/Restaurant/Details";
import Gallery from "../../src/components/Restaurant/Gallery";
import { IThumbnail } from "../../src/lib/interfaces";

const Location = () => {
  const { query } = useRouter();
  const locationId = query.id as string;

  const { data } = useLocation(locationId || "");

  return (
    <>
      <div className="">
        <Carousel
          data={[
            data?.thumbnail?.media?.url,
            ...(data?.images?.map((img: any) => img?.media?.url) || []),
          ]}
          showArrows={false}
          banner
          className="w-[100%]"
        />
        <div className="lg:h-[300px] h-[150px] relative -bottom-[60px]  lg:-bottom-[270px]  left-[calc(-50vw+50%)] w-[calc(100vw-0px)] bg-gradient-to-t  from-black"></div>
      </div>

      <Details
        name={data?.name}
        description={data?.description}
        id={data?.id}
        whatCanYouDo={data?.whatCanYouDo}
      />
      <Gallery
        href="locations"
        images={data?.images?.map((img: IThumbnail) => ({ ...img })) || []}
      />
    </>
  );
};
export default Location;
