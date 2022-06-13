import { useRouter } from "next/router";
import { useState } from "react";
import { LocationsResponse } from "../../src/api/Locations";
import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import CityCard from "../../src/components/shared/CityCard/CityCard";
import Select from "../../src/components/shared/Select/Select";
import { useCategories } from "../../src/lib/hooks/queries/useCategories";
import { useLocations } from "../../src/lib/hooks/queries/useLocations";
import { useRestaurants } from "../../src/lib/hooks/queries/useRestaurants";

const Restaurants = () => {
  const { data: locations } = useLocations();
  const { data: categories } = useCategories();

  const router = useRouter();
  const { locationId, categoryId } = router.query;
  const { data: restaurants } = useRestaurants({
    locationId: locationId as string,
    categoryId: categoryId as string,
  });

  const [category, setCategory] = useState();
  const [location, setLocation] = useState();

  const handleCategoryChange = (option: any) => {
    setCategory(option);
    router.push(
      {
        query: {
          ...router.query,
          ...(option.id !== "" ? { categoryId: option.id } : {}),
        },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };
  const handleLocationChange = (option: any) => {
    setLocation(option);
    router.push(
      {
        query: {
          ...router.query,
          ...(option.id !== "" ? { locationId: option.id } : {}),
        },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };
  return (
    <div className="bg-black">
      <Header />
      <div className="flex justify-end flex-col md:flex-row items-center gap-2 mt-5">
        <Select
          selectClassName="w-[250px] mr-12 bg-black-300"
          menuClassName="w-[250px]"
          data={categories}
          selected={category}
          placeholder={"Select category"}
          onChange={handleCategoryChange}
        />
        <Select
          selectClassName="w-[250px] mr-12 bg-black-300"
          menuClassName="w-[250px]"
          data={locations?.data}
          selected={location}
          placeholder={"Select location"}
          onChange={handleLocationChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-8 mx-[40px] my-[60px] place-items-center">
        {restaurants?.data.map((item: LocationsResponse) => {
          return (
            <CityCard
              key={item.id}
              numberOfVisits={item?.numberOfVisits}
              name={item?.name}
              description={item?.description}
              href={"restaurants"}
              id={item.id}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};
export default Restaurants;
