import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import { Carousel } from "../../src/components/shared/Carousel/Carousel";
// import rugove from "../../src//assets/images/Rugove.jpeg";
import cs from "classnames";

const Location = () => {
  return (
    <>
      <div className="bg-black">
        <Header />

        <Carousel showArrows={false} banner className="w-[100%]" />

        <div className="absolute bottom-0">
          <div className="mb-[23px]">
            <h1 className="text-5xl">Rugova</h1>
          </div>
          <div className="font-medium text-sm md:text-lg">
            <p className="overflow-hidden">
              Rugova is the first mountain that comes into your mind, this place
              has a wonderful atmosphere. The nature is beautiful, covered with
              high trees and having small lakes, makes Rugova unforgettable and
              a very interesting place to visit, because it has so much to
              offer.
            </p>
          </div>
          <div className="text-sm md:text-base mt-14 lg:mt-[27px]">
            <ul className="space-x-7 sm:space-x-10">
              <div className="inline">
                <img
                  src="../../assets/icons/Museum.png"
                  className="inline pr-2"
                />
                Museum
              </div>
              <div className="inline">
                <img
                  src="../../assets/icons/Clubs.png"
                  className="inline pr-2"
                />
                Clubs & Pubs
              </div>
              <div className="inline">
                <img src="../../assets/icons/Art.png" className="inline pr-2" />
                Art Festival
              </div>
              <div className="inline">
                <img
                  src="../../assets/icons/Hiking.png"
                  className="inline pr-2"
                />
                Hiking
              </div>
            </ul>
          </div>
        </div>
        <div className=" text-3xl max-w-[1230px] leading-9  text-white font-bold mx-auto">
          <p>Why Rugove ?</p>
        </div>
        <div className="text-lg text-white  mb-[190px] sm:mt-4 sm:mb-[180px] md:mt-4 md:mb-[90px] lg:mb-[80px] xl:mb-[55px]  ">
          <p>
            When thinking about Kosova, Prishtina is the first city that comes
            into your mind, this place has a wonderful atmosphere, Lorem Ipsum
            is simply dummy of the printing and type setting industry. When
            thinking about Kosova, Prishtina is the first city that comes into
            your mind, this place has a wonderful atmosphere, Lorem Ipsum is
            simply dummy of the printing and type setting industry. Prishtina is
            the first city that comes into your mind, this place has a wonderful
            atmosphere,
          </p>
        </div>
        <div className="xl:mt-[55px] xl:mb-[55px]">
          <div className="text-3xl leading-9 inline text-white font-bold e">
            <p>What can you do in Rugove?</p>
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
