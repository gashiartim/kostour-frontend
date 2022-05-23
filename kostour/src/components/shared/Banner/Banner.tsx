import Image from "next/image";
import banner from "../../../assets/images/landing-page2.png";
import cs from "classnames";
import router from "next/router";

const Banner = () => {
  return (
    <div
      className={cs({
        ["relative w-full mt-0 lg:-mt-32 xl:-mt-36 bg-black mb-52"]: true,
      })}
    >
      <Image
        src={banner}
        objectFit="fill"
        layout="responsive"
        className="h-[290px] md:h-[805px] w-[100%]"
        alt="banner image"
      />
      <div className="absolute w-full top-0 bottom-[0px] bg-gradient-to-t from-black opacity-50"></div>
      <div className="mx-auto absolute top-[50%] w-full">
        <div className="flex items-center justify-between m-auto p-4 md-[300px]  md:w-[400px] lg:w-[676px] md:h-[66px] rounded-[36px] border border-opacity-25 border-white bg-[#0F1216] bg-opacity-75 focus-within:border-blue">
          <input
            className="ml-2 text-white bg-transparent rounded-full focus:outline-none md:pl-6 placeholder-shown:truncate"
            type="text"
            placeholder="Search your favourite location..."
          />
          <button className="relative px-5 py-2 transition-all duration-75 ease-in-out bg-blue-500 rounded-full bg-blue hover:text-sm h-[40px] text-md md:px-7 min-w-[120px] w-[120px]">
            <p className="sm:visible">Search</p>
          </button>
        </div>
      </div>
      <p className="text-center text-white">Find by activities</p>
    </div>
  );
};
export default Banner;
