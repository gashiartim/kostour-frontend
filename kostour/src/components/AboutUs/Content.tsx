import forest from "../../assets/icons/forest.png";
import visa from "../../assets/icons/visa.png";
import people from "../../assets/icons/people.png";
import climate from "../../assets/icons/climate.png";
import AboutUs from "../../../pages/about";
import Image from "next/image";

const Content = () => {
  return (
    <div className="mt-[112px] text-gray-500 w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {contents.map((content) => (
          <div key={content.id} className="p-5 mb-10 lg:mb-0 lg:p-0">
            <h1 className="text-3xl text-white pb-[20px] font-bold text-center lg:text-left">
              {content.title}
            </h1>
            <p className="max-w-[350px]">{content.content}</p>
          </div>
        ))}
      </div>

      <h1 className="text-center text-5xl mt-[200px] mb-[75px] font-bold text-white">
        Why should I visit Kosovo ?
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-around gap-9 mt-[80px] mb-[180px]">
        <div>
          <Image
            src={forest}
            width=""
            height=""
            objectFit="cover"
            alt="card"
            loading="lazy"
            className="inline pb-[31px] sm:mx-[300px] mx-[180px]  md:mx-0"
          />
          <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
            Full of forest
          </h1>
          <p>More than 40% of the land in Kosovo is forestry and woodland.</p>
        </div>
        <div>
          <Image
            src={visa}
            width=""
            height=""
            objectFit="cover"
            alt="card"
            loading="lazy"
            className="inline pb-[31px] mx-[px] sm:mx-[300px] md:mx-0"
          />
          <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
            Visa Free
          </h1>
          <p>
            Most of the countries don’t need to have a Visa to visit Kosovo.
          </p>
        </div>
        <div>
          <Image
            src={climate}
            width=""
            height=""
            objectFit="cover"
            alt="card"
            loading="lazy"
            className="inline pb-[31px] mx-[px] sm:mx-[300px] md:mx-0"
          />
          <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
            Perfect Climate
          </h1>
          <p>Summers in Kosovo are really warm, perfect conditions.</p>
        </div>
        <div>
          <Image
            src={people}
            width=""
            height=""
            objectFit="cover"
            alt="card"
            loading="lazy"
            className="inline pb-[31px] mx-[180px] sm:mx-[300px] md:mx-0"
          />
          <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
            Young People
          </h1>
          <p>
            More than 50% of the population is under 25, full of love and
            energy.
          </p>
        </div>
      </div>
    </div>
  );
};

const contents = [
  {
    id: 0,
    title: "What we do",
    content:
      "So, we took the initiative to bring KosTour, a website that brings you some of Kosovo's many beautiful places.",
  },
  {
    id: 1,
    title: "How it works",
    content:
      "With this, we invite you to come and visit and experience the beauty and magic of mountain places through hiking and skiing adventures.",
  },
  {
    id: 2,
    title: "Our message",
    content:
      "Do not leave without exploring the art, culture and nightlife of Kosovo. KosTour is here for gyou, to make your next travel destination easier.",
  },
];

export default Content;
