import { useRouter } from "next/router";
import { useState } from "react";
import { ILocation, LocationsResponse } from "../../src/api/Locations";
import { IRestaurant } from "../../src/api/Restaurants";
import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import CityCard from "../../src/components/shared/CityCard/CityCard";
import LoadingBoundary from "../../src/components/shared/LoadingBoundary/LoadingBoundary";
import NoDataBoundary from "../../src/components/shared/NoDataBoundary/NoDataBoundary";
import { Select } from "../../src/components/shared/Select/Select";
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
    <div className="dark:bg-black">
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-end gap-2 mt-5 md:flex-row">
        <Select
          name="category"
          className="w-full flex justify-center md:justify-end mt-[20px]"
          buttonClassName="w-[250px] dark:!bg-transparent  border-t-0 border-x-0 !dark:text-white dark:border-b-white focus:!border-none"
          options={categories || []}
          value={category}
          label={"Select category"}
          valueClassName="dark:!text-white"
          onChange={handleCategoryChange}
          hideLabel={true}
        />
        <Select
          name="category"
          className="flex justify-center md:justify-end mt-[20px]"
          buttonClassName="w-[250px] dark:!bg-transparent  border-t-0 border-x-0 !dark:text-white dark:border-b-white focus:!border-none"
          options={locations?.data || []}
          value={location}
          label={"Select location"}
          valueClassName="dark:!text-white"
          onChange={handleLocationChange}
          hideLabel={true}
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
            {restaurants?.data?.map((item: IRestaurant) => {
              return (
                <CityCard
                  key={item.id}
                  numberOfVisits={0}
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
