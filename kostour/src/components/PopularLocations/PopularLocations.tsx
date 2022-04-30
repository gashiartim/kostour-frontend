import CityCard from "../shared/CityCard/CityCard";

const dummyCities = [
  { name: "Rugove", image: "src" },
  { name: "Prizren", image: "src" },
  { name: "Prishtine", image: "src" },
  { name: "Brezovica", image: "src" },
];

const PopulatLocations = () => {
  return (
    <div className="mb-[200px]">
      <h2 className="text-center lg:md:text-3xl text-xl font-bold lg:md:mb-16 lg:md:mt-0 mb-6 mt-12 text-white">
        Popular Locations in Kosovo
      </h2>

      <div className="grid mx-auto justify-center gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-max">
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>
    </div>
  );
};
export default PopulatLocations;
