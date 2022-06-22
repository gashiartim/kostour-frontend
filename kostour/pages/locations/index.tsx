import { useRouter } from "next/router";
import { useState } from "react";
import { ILocation, LocationsResponse } from "../../src/api/Locations";
import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import CityCard from "../../src/components/shared/CityCard/CityCard";
import LoadingBoundary from "../../src/components/shared/LoadingBoundary/LoadingBoundary";
import NoDataBoundary from "../../src/components/shared/NoDataBoundary/NoDataBoundary";
import { Select } from "../../src/components/shared/Select/Select";
import { useCategories } from "../../src/lib/hooks/queries/useCategories";
import { useLocations } from "../../src/lib/hooks/queries/useLocations";

const Locations = () => {
  const { data, isLoading: categoriesLoading } = useCategories();
  const router = useRouter();
  const { categoryId, name } = router.query;
  const { data: locations, isLoading } = useLocations({
    categoryId: categoryId as string,
    name: name as string,
  });

  console.log("locations", locations);

  const [category, setCategory] = useState();
  const handleCategoryChange = (option: any) => {
    setCategory(option);
    router.push(
      {
        query: {
          ...router.query,
          ...(option.id !== "" ? { categoryId: option.id, name } : {}),
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

      <Select
        className="w-full flex justify-center md:justify-end mt-[20px]"
        label="Select Category"
        options={data}
        value={category}
        name="category"
        isLoading={categoriesLoading}
        buttonClassName="w-[250px] dark:!bg-transparent  border-t-0 border-x-0 !dark:text-white dark:border-b-white focus:!border-none"
        // menuClassName="w-[250px]"
        // data={data}
        // selected={category}
        // placeholder={"Select category"}
        valueClassName="dark:!text-white"
        onChange={handleCategoryChange}
        hideLabel={true}
      />
      <LoadingBoundary
        loading={isLoading}
        loadingMessage="Loading locations..."
        className="min-h-[50vh]"
      >
        <NoDataBoundary
          dataLength={locations?.data?.length}
          className="min-h-[50vh]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto my-[60px] place-items-center gap-4 w-max">
            {locations?.data?.map((item: ILocation) => {
              return (
                <CityCard
                  key={item.id}
                  numberOfVisits={item?.numberOfVisits}
                  name={item?.name}
                  description={item?.description}
                  href={"locations"}
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
export default Locations;
