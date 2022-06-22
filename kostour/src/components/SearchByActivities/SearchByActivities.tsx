import Image from "next/image";
import { useRouter } from "next/router";
import city from "../../assets/images/City.png";
import { useCategories } from "../../lib/hooks/queries/useCategories";
const SearchByActivities = () => {
  const { data } = useCategories();
  const router = useRouter();

  function handleClick(id: string) {
    router.push({
      pathname: "locations",
      query: { categoryId: id },
    });
  }

  return (
    <div className="p-5 lg:p-0" id="activities">
      <h2 className="mt-12 mb-6 text-xl font-bold text-center text-gray-800 lg:md:text-3xl lg:md:mb-16 lg:md:mt-28 dark:text-white">
        Search by activities
      </h2>

      <div className="md:grid-cols-2 md:grid gap-[30px] lg:w-max mx-auto w-full">
        {data && data[0] && (
          <div
            className="w-full lg:max-w-[600px] min-h-[210px] max-h-[450px] h-full relative rounded-[4px] mb-[30px] lg:mb-0 hover:card-hover"
            onClick={() => handleClick(data[0]?.id)}
          >
            <Image
              src={
                process.env.PHOTO_API_URL + "" + data[0]?.thumbnail?.media?.url
              }
              className="w-full h-full rounded-[4px]"
              layout="fill"
              objectFit="cover"
              alt={data[0]?.name}
            />
            <div className="absolute bottom-0 pb-3 pl-5 text-3xl font-medium text-white cursor-pointer">
              {data[0].name || ""}
              <p className="text-base font-normal">
                {data[0]?.locations?.length + " "}
                Locations
              </p>
            </div>
          </div>
        )}

        <div className="w-full grid-rows-2 xl:grid">
          <div className="lg:mb-[30px]">
            {data && data[1] && (
              <div
                className="w-full lg:min-w-[600px] lg:max-w-[600px] max-h-[210px] h-full min-h-[210px] mb-[30px] lg:mb-0 bg-blue-300 relative rounded-[4px] hover:card-hover"
                onClick={() => handleClick(data[1]?.id)}
              >
                <Image
                  src={
                    process.env.PHOTO_API_URL +
                    "" +
                    data[1]?.thumbnail?.media?.url
                  }
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[4px]"
                  alt={data[1]?.name}
                />
                <div className="absolute bottom-0 pb-3 pl-5 text-3xl font-medium text-white cursor-pointer">
                  {data[1].name || ""}
                  <p className="text-base font-normal">
                    {data[1]?.locations?.length} Locations
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:flex">
            {data && data[2] && (
              <div
                className="relative w-full lg:min-w-[285px] mb-[30px] lg:mb-0 lg:max-w-[285px] max-h-[210px]  min-h-[210px] lg:mr-[30px] rounded-[4px] hover:card-hover"
                onClick={() => handleClick(data[2]?.id)}
              >
                <Image
                  src={
                    process.env.PHOTO_API_URL +
                    "" +
                    data[2]?.thumbnail?.media?.url
                  }
                  layout="fill"
                  objectFit="cover"
                  alt={data[2]?.name}
                  className="rounded-[4px]"
                />
                <div className="absolute bottom-0 pb-3 pl-5 text-3xl font-medium text-white cursor-pointer ">
                  {data[2].name || ""}
                  <p className="text-base font-normal">
                    {data[2]?.locations?.length} Locations
                  </p>
                </div>
              </div>
            )}

            {data && data[3] && (
              <div
                className="relative w-full lg:min-w-[285px] mb-[30px] lg:mb-0 lg:max-w-[285px] max-h-[210px]  min-h-[210px] rounded-[4px] hover:card-hover"
                onClick={() => handleClick(data[3]?.id)}
              >
                <Image
                  src={
                    process.env.PHOTO_API_URL +
                    "" +
                    data[3]?.thumbnail?.media?.url
                  }
                  layout="fill"
                  objectFit="cover"
                  alt={data[3]?.name}
                  className="rounded-[4px]"
                />
                <div className="absolute bottom-0 pb-3 pl-5 text-3xl font-medium text-white cursor-pointer">
                  {data[3].name || ""}
                  <p className="text-base font-normal">
                    {data[3]?.locations?.length} Locations
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* here */}
        </div>
      </div>
    </div>
  );
};
export default SearchByActivities;
