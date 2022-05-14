import art from "../../assets/images/ArtsAndCulture.png";
import club from "../../assets/images/Clubbing.png";
import hiking from "../../assets/images/Hiking.png";
import ski from "../../assets/images/SkiAdventures.png";

import Image from "next/image";

const SearchByActivities = () => {
  return (
    <div
      className=" w-max mx-auto mb-16 lg:mb-[450px] md:mb-[420px] xl:mb-56"
      id="activities"
    >
      <h2 className="lg:md:text-3xl text-xl font-bold text-gray-800  text-center lg:md:mb-16 lg:md:mt-28 mb-6 mt-12 dark:text-white">
        Search by activities
      </h2>

      <div className="md:grid grid-cols-2 gap-3 relative xl:gap-[30px] ">
        <div className="w-[300px] h-[350px] xl:w-[600px] xl:h-[450px] rounded-[4px] relative mb-2 md:mb-0 ``">
          <Image
            src={ski}
            objectFit="cover"
            className="rounded-[6px] "
            alt="card"
            loading="lazy"
            placeholder="blur"
          />
          <div className="absolute bottom-0 pl-5 pb-3 font-medium text-3xl text-white cursor-pointer bg-url['']">
            Ski Adventures
            <p className="font-normal text-base">4 Locations</p>
          </div>
        </div>

        <div className="xl:grid grid-rows-2 xl:gap-[30px]">
          <div className="w-[300px] h-[350px] xl:w-[600px] xl:h-[210px] bg-green-400 rounded-[4px] relative mb-2 md:mb-0">
            <Image
              src={hiking}
              objectFit="cover"
              className="rounded-[6px] "
              alt="card"
              loading="lazy"
              placeholder="blur"
            />
            <div className="absolute bottom-0 pl-5 pb-3 font-medium text-xl text-white cursor-pointer">
              Hiking
              <p className="font-light text-sm">12 Locations</p>
            </div>
          </div>

          <div className="md:absolute left-0 md:flex md:mt-3 xl:static xl:mt-0 xl:gap-[30px]">
            <div className="w-[300px] h-[350px] xl:w-[285px] xl:h-[210px] bg-blue-300 rounded-[4px] relative mb-2 md:mb-0 md:mr-3 xl:mr-0">
              <Image
                src={club}
                objectFit="cover"
                className="rounded-[6px] "
                alt="card"
                loading="lazy"
                placeholder="blur"
              />
              <div className="absolute bottom-0 pl-5 pb-3 font-medium text-xl text-white cursor-pointer">
                Clubbing
                <p className="font-light text-sm">10 Locations</p>
              </div>
            </div>

            <div className="w-[300px] h-[350px] xl:w-[285px] xl:h-[210px] bg-blue-300 rounded-[4px] relative mb-2 md:mb-0">
              <Image
                src={art}
                objectFit="cover"
                className="rounded-[6px] "
                alt="card"
                loading="lazy"
                placeholder="blur"
              />
              <div className="absolute bottom-0 pl-5 pb-3 font-medium text-xl text-white cursor-pointer">
                Arts And Culture
                <p className="font-light text-sm">7 Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchByActivities;
