import aboutimg from "../../assets/images/about-banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="text-gray-800 relative top-0 -mt-32  mb-52 left-[calc(-50vw+50%)] w-[calc(100vw-0px)]">
      <div className="relative !mx-auto h-[495px]">
        <Image
          src={aboutimg}
          objectFit="cover"
          layout="fill"
          alt="card"
          loading="lazy"
          className="!w-full "
        />
      </div>
      <div className="absolute top-0 flex flex-col justify-center w-full h-full pt-12 text-center bg-gradient-to-t from-black from-background-dark">
        <h2 className="text-5xl leading-[60px] mt-[80px] md:mt-[0px] pb-[25px] font-bold text-white">
          ABOUT US
        </h2>
        <p className="text-white">
          We are 5 young people from Kosovo who are fascinated by the idea{" "}
        </p>
        <p className="text-white sm:invisible md:visible">
          of discovering the beauties of our country through the eyes of others.{" "}
        </p>
      </div>
    </div>
  );
};
export default Banner;
