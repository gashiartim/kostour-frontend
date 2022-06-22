import { useLocations } from "../../lib/hooks/queries/useLocations";
import CityCard from "../shared/CityCard/CityCard";
import Image from "next/image";
import { useRestaurants } from "../../lib/hooks/queries/useRestaurants";
import city from "../../assets/images/Rugove.jpeg";
import { IThumbnail } from "../../lib/interfaces";
import { useRouter } from "next/router";

interface Props {
  href: string;
  images?: IThumbnail[];
}
const Gallery = ({ href, images }: Props) => {
  const { query } = useRouter();
  const locationId = query.id as string;

  const { data, isLoading } = useRestaurants({
    locationId: locationId,
  });

  if (isLoading) return <h2>Loading data...</h2>;

  if (data?.data.length === 0) return null;

  return (
    <div className="">
      {images && Boolean(images.length) && (
        <div>
          <h2 className="mb-6 text-xl font-bold text-white text-start lg:md:text-3xl lg:md:mb-16 lg:md:mt-0">
            Photos from this Restaurant
          </h2>

          <div className="grid justify-center gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-max">
            {images &&
              images?.map((image: IThumbnail, idx: number) => {
                return (
                  <Image
                    key={idx}
                    src={process.env.PHOTO_API_URL + "" + image.media.url}
                    width="298px"
                    height="298px"
                    objectFit="cover"
                    className="rounded-[6px] "
                    alt="card"
                    loading="lazy"
                    placeholder="blur"
                  />
                );
              })}
          </div>
        </div>
      )}

      <div className="mt-[150px] mb-[150px] ">
        <h2 className="mt-12 mb-6 text-xl font-bold text-white text-start lg:md:text-3xl ">
          Restaurants in this Location
        </h2>
        <div className="grid justify-center gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-max">
          {!isLoading &&
            data?.data?.map((location: any, idx: number) => {
              return (
                <CityCard
                  key={idx}
                  {...location}
                  id={location.id}
                  href={href}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
