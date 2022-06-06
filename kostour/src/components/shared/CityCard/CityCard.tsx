import Image from "next/image";
import city from "../../../assets/images/Rugove.jpeg";

type Props = {
  name?: string;
  description?: string;
  whatCanYouDo?: string;
  thumbnail?: any;
};

const CityCard = ({ name, thumbnail }: Props) => {
  console.log({ thumbnail });

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
    //     <div className="text-white ">
    //       ehenderit voluptate. Ea nisi culpa magna...
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-[298px] h-[298px] rounded-[6px] overflow-hidden">
      {thumbnail ? (
        <Image
          src={"http://localhost:3000/" + thumbnail?.media?.url}
          width="298px"
          height="298px"
          objectFit="cover"
          className="rounded-[6px] "
          alt="card"
          loading="lazy"
          // placeholder="blur"
        />
      ) : (
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
      )}
      <div className="absolute inset-x-0 bottom-0 flex justify-between w-full p-5 text-xs leading-4 text-center text-white">
        <div className="text-white cursor-pointer text-md">{name}</div>
        <div v-if="icon" className="text-sm text-white cursor-pointer">
          <i className="mr-1 fa fa-utensils"></i>
          <b>23</b>
        </div>
      </div>
    </div>
  );
};
export default CityCard;
