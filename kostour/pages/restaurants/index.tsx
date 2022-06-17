import { useRouter } from "next/router";
import { useState } from "react";
import { LocationsResponse } from "../../src/api/Locations";
import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import CityCard from "../../src/components/shared/CityCard/CityCard";
import LoadingBoundary from "../../src/components/shared/LoadingBoundary/LoadingBoundary";
import NoDataBoundary from "../../src/components/shared/NoDataBoundary/NoDataBoundary";
import Select from "../../src/components/shared/Select/Select";
import { useCategories } from "../../src/lib/hooks/queries/useCategories";
import { useLocations } from "../../src/lib/hooks/queries/useLocations";
import { useRestaurants } from "../../src/lib/hooks/queries/useRestaurants";

const Restaurants = () => {
  const { data: locations } = useLocations();
  const { data: categories } = useCategories();

  const router = useRouter();
  const { locationId, categoryId } = router.query;
  const { data: restaurants, isLoading } = useRestaurants({
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
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-end gap-2 mt-5 md:flex-row">
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

      <LoadingBoundary
        loading={isLoading}
        loadingMessage="Loading restaurants..."
        className="min-h-[50vh]"
      >
        <NoDataBoundary
          dataLength={restaurants?.data?.length}
          className="min-h-[50vh]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-[60px] place-items-center w-max mx-auto gap-4">
            {restaurants?.data?.map((item: LocationsResponse) => {
              return (
                <CityCard
                  key={item.id}
                  numberOfVisits={item?.numberOfVisits}
                  name={item?.name}
                  description={item?.description}
                  href={"restaurants"}
                  id={item.id}
                  thumbnail={item.thumbnail}
                />
              );
            })}
          </div>
        </NoDataBoundary>
      </LoadingBoundary>
    </div>
  );
};
export default Restaurants;
