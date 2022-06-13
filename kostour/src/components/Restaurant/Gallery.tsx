import { useLocations } from "../../lib/hooks/queries/useLocations";
import CityCard from "../shared/CityCard/CityCard";
import Image from "next/image";
import { useRestaurants } from "../../lib/hooks/queries/useRestaurants";
import city from "../../assets/images/Rugove.jpeg";

interface Props {
  href: string;
}
const Gallery = ({ href }: Props) => {
  const { data, isLoading } = useRestaurants();

  if (isLoading) return <h2>Loading data...</h2>;

  return (
    <div className="mb-[50px] mt-[150px] container">
      <h2 className="mt-12 mb-6 text-xl font-bold text-start ml-[50px] md:ml-[110px] text-white lg:md:text-3xl lg:md:mb-16 lg:md:mt-0">
        Photos from this Restaurant
      </h2>

      <div className="grid justify-center gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-max">
        {!isLoading &&
          data?.data?.map((location: any, idx: number) => {
            return (
              <Image
                src={city}
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

      <div className="mt-[150px] mb-[150px] container">
        <h2 className="mt-12 mb-6 text-xl font-bold text-start ml-[50px] md:ml-[110px] text-white lg:md:text-3xl lg:md:mb-16 lg:md:mt-0">
          Restaurants in this Location
        </h2>
        <div className="grid justify-center gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-max">
          {!isLoading &&
            data?.data?.map((location: any, idx: number) => {
              return <CityCard key={idx} {...location} href={href} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
