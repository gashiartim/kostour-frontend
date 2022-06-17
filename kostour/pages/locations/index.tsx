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

const Locations = () => {
  const { data } = useCategories();
  const router = useRouter();
  const { categoryId } = router.query;
  const { data: locations, isLoading } = useLocations({
    categoryId: categoryId as string,
  });

  const [category, setCategory] = useState();
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
  return (
    <div className="bg-black">
      {/* <Header /> */}

      <Select
        className="w-full flex justify-center md:justify-end mt-[20px]"
        selectClassName="w-[250px] mr-12 bg-black-300"
        menuClassName="w-[250px]"
        data={data}
        selected={category}
        placeholder={"Select category"}
        onChange={handleCategoryChange}
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
            {locations?.data?.map((item: LocationsResponse) => {
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
