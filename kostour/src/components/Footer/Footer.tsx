import { useRouter } from "next/router";
import { Icon } from "../shared/Icon/Icon";

const Footer = () => {
  const router = useRouter();

  return (
    <div className=" mt-10 bg-[#1C3457] dark:bg-[#22272E] flex flex-col items-center justify-center p-9 md:pt-28 ">
      <div className="w-full flex md:flex justify-between md:w-10/12 md:mx-auto">
        <div className="md:mr-32 mx-auto" onClick={() => router.push("/")}>
          <Icon icon="KOS-TOUR" className="h-14 text-black " />
        </div>
        <div className="justify-between w-full hidden md:flex">
          <div className="w-full lg:w-1/3 md:w-1/2 ">
            <h2 className="mb-1 lg:mb-[34px] font-semibold text-white tracking-wide text-xl">
              Qytetet
            </h2>
            <h2 className="cursor-pointer hover:opacity-100 opacity-70 text-white w-auto text-left text-sm my-5">
              Peja
            </h2>
            <h2 className="cursor-pointer hover:opacity-100 opacity-70 text-white text-sm my-5">
              Prishtina
            </h2>
            <h2 className="cursor-pointer hover:opacity-100 opacity-70 text-white text-sm my-5">
              Prizreni
            </h2>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 ">
            <h2 className="mb-1 lg:mb-[34px] font-semibold text-white tracking-wide text-xl">
              Lokacionet
            </h2>
            <ul className="space-y-0.5 lg:space-y-[20px] text-sm list-none">
              <li>
                <a className="cursor-pointer hover:opacity-100 opacity-70 text-white">
                  Rugova
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:opacity-100 opacity-70 text-white">
                  Brezovica
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:opacity-100 opacity-70 text-white">
                  Prevallë
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 ">
            <h2 className="mb-1 lg:mb-[34px] font-semibold text-white tracking-wide text-xl">
              Me te vizituarat
            </h2>
            <ul className="space-y-0.5 lg:space-y-[20px] text-sm list-none">
              <li>
                <a className="cursor-pointer hover:opacity-100 opacity-70 text-white">
                  Prishtina
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:opacity-100 opacity-70 text-white">
                  Rugova
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:opacity-100 opacity-70 text-white">
                  Prizreni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mx-auto mt-auto border-t border-opacity-25 w-[80%] p-2 lg:p-0">
        <div className="flex justify-start">
          <a href="https://twitter.com/?lang=en">
            <i className="fab fa-twitter hover:text-white text-gray-400 m-2"></i>
          </a>
          <a href="http://www.linkedin.com/">
            <i className="fab fa-linkedin-in hover:text-white text-gray-400 m-2"></i>
          </a>
          <a href="http://www.facebook.com/">
            <i className="fab fa-facebook-f hover:text-white text-gray-400 m-2"></i>
          </a>
        </div>
        <div className="flex justify-end w-full mt-1">
          <p className="text-sm opacity-70 text-white">KOSTOUR 200000</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
