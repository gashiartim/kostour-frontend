import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import { Carousel } from "../../src/components/shared/Carousel/Carousel";
// import rugove from "../../src//assets/images/Rugove.jpeg";
import { useLocation } from "../../src/lib/hooks/queries/useLocation";
import { useRouter } from "next/router";

const Location = () => {
  const { query } = useRouter();
  const locationId = query.index as string;
  const { data } = useLocation(locationId || "");

  return (
    <>
      <div className="bg-black ">
        <div>
          <Header />

          <Carousel showArrows={false} banner className="w-[100%]" />
        </div>

        <div className="absolute w-full top-0 bottom-[0px] bg-gradient-to-b from-black opacity-50"></div>
        <div className="absolute top-[75%] left-[185px] right-[185px]">
          <p className=" text-3xl  leading-9  text-white font-bold">
            {data.name}
          </p>

          <div className="text-lg text-white  mb-[190px] sm:mt-4 sm:mb-[180px] md:mt-4 md:mb-[90px] lg:mb-[80px] xl:mb-[55px]  ">
            <p className="whitespace-pre-wrap ">
              {/* {data.description} */}
              Rugova is the first mountain that comes into your mind, this place
              has a wonderful atmosphere. The nature is beautiful, covered with
              high trees and having small lakes, makes Rugova unforgettable and
              a very interesting place to visit, because it has so much to
              offer.
            </p>
          </div>
        </div>

        <div></div>

        <div className="xl:mt-[55px] xl:mb-[75px] px-[186px]">
          <div className="text-3xl leading-9 inline text-white font-bold e">
            <p>Why {data.name}?</p>
          </div>
          <div className="text-lg text-white mt-5 mb-[190px] sm:mt-4 sm:mb-[180px] md:mt-4 md:mb-[90px] lg:mb-[80px] xl:mb-[55px] ">
            <p>
              {data.whatCanYouDo}
              When thinking about Kosova, Prishtina is the first city that comes
              into your mind, this place has a wonderful atmosphere, Lorem Ipsum
              is simply dummy of the printing and type setting industry. When
              thinking about Kosova, Prishtina is the first city that comes into
              your mind, this place has a wonderful atmosphere, Lorem Ipsum is
              simply dummy of the printing and type setting industry. Prishtina
              is the first city that comes into your mind Lorem Ipsum is simply
              dummy of the printing and type setting industry. Prishtina is the
              first city.
            </p>
          </div>
        </div>
        <div className="xl:mt-[55px] xl:mb-[55px] px-[186px]">
          <div className="text-3xl leading-9 inline text-white font-bold e">
            <p>What can you do in {data.name}?</p>
          </div>
          <div className="text-lg text-white mt-5 mb-[190px] sm:mt-4 sm:mb-[180px] md:mt-4 md:mb-[90px] lg:mb-[80px] xl:mb-[55px] ">
            <p>
              When thinking about Kosova, Prishtina is the first city that comes
              into your mind, this place has a wonderful atmosphere, Lorem Ipsum
              is simply dummy of the printing and type setting industry. When
              thinking about Kosova, Prishtina is the first city that comes into
              your mind, this place has a wonderful atmosphere, Lorem Ipsum is
              simply dummy of the printing and type setting industry. Prishtina
              is the first city that comes into your mind Lorem Ipsum is simply
              dummy of the printing and type setting industry. Prishtina is the
              first city.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Location;
