import { useLocations } from "../../lib/hooks/queries/useLocations";
import CityCard from "../shared/CityCard/CityCard";

const PopularLocations = () => {
  const { data, isLoading } = useLocations();

  if (isLoading) return <h2>Loading data...</h2>;

  return (
    <div className="mb-[200px]">
      <h2 className="mt-12 mb-6 text-xl font-bold text-center text-white lg:md:text-3xl lg:md:mb-16 lg:md:mt-0">
        Popular Locations in Kosovo
      </h2>

      <div className="grid justify-center gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-max">
        {!isLoading &&
          data?.data?.map((location: any, idx: number) => {
            // console.log({ lodation });

            return <CityCard key={idx} {...location} href={"locations"} />;
          })}
        {/* <CityCard /> */}
        {/* <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard /> */}
      </div>
    </div>
  );
};
export default PopularLocations;
