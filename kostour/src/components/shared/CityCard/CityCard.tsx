import Image from "next/image";
import city from "../../../assets/images/Rugove.jpeg";

const CityCard = () => {
  return (
    // <div className="rounded-[6px] relative">
    //   <Image
    //     src={city}
    //     width="298px"
    //     height="298px"
    //     objectFit="cover"
    //     className="rounded-[6px] absolute"
    //     alt="card"
    //     loading="lazy"
    //     placeholder="blur"
    //   />
    //   <div className="absolute t-0">
    //     <div className=" text-white">
    //       ehenderit voluptate. Ea nisi culpa magna...
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-[298px] h-[298px] rounded-[6px] overflow-hidden">
      <Image
        src={city}
        width="298px"
        height="298px"
        objectFit="cover"
        className="rounded-[6px] "
        alt="card"
        loading="lazy"
        placeholder="blur"
      />
      <div className="absolute w-full p-5 bottom-0 inset-x-0 flex justify-between text-white text-xs text-center leading-4">
        <div className="text-md text-white cursor-pointer">Rugove</div>
        <div v-if="icon" className="text-sm text-white cursor-pointer">
          <i className="fa fa-utensils mr-1"></i>
          <b>23</b>
        </div>
      </div>
    </div>
  );
};
export default CityCard;
