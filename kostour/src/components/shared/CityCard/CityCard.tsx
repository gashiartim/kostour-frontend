import Image from "next/image";
import Link from "next/link";
import city from "../../../assets/images/Rugove.jpeg";

type Props = {
  id: string;
  name?: string;
  description?: string;
  whatCanYouDo?: string;
  thumbnail?: any;
  href: string;
  numberOfVisits: number;
};

const CityCard = ({ name, thumbnail, id, href, numberOfVisits }: Props) => {
  return (
    <div className="relative w-[298px] h-[298px] rounded-[6px] overflow-hidden hover:!card-hover">
      <Link href={`/${href}/${id}`}>
        <div>
          {thumbnail ? (
            <Image
              src={process.env.PHOTO_API_URL + "" + thumbnail?.media?.url}
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
        </div>
      </Link>
      <div className="absolute inset-x-0 bottom-0 flex justify-between w-full p-5 text-xs leading-4 text-center text-white">
        <div className="text-white cursor-pointer text-md">{name}</div>
        <div v-if="icon" className="text-sm text-white cursor-pointer">
          <i className="mr-1 fa fa-utensils"></i>
          <b>{numberOfVisits}</b>
        </div>
      </div>
    </div>
  );
};
export default CityCard;
