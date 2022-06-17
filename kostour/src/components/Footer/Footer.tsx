import { useRouter } from "next/router";
import { Icon } from "../shared/Icon/Icon";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="lg:mt-32 mt-[80%]  bg-[#1C3457] dark:bg-[#22272E] flex flex-col items-center justify-center p-9 md:pt-28  relative top-0  left-[calc(-50vw+50%)] w-[100vw]">
      <div className="container flex justify-between w-full h-max md:flex md:w-10/12 md:mx-auto">
        <div className="mx-auto md:mr-32" onClick={() => router.push("/")}>
          <Icon icon="KOS-TOUR" className="text-black h-14 " />
        </div>
        <div className="justify-between hidden w-full md:flex">
          <div className="w-full lg:w-1/3 md:w-1/2 ">
            <h2 className="mb-1 lg:mb-[34px] font-semibold text-white tracking-wide text-xl">
              Qytetet
            </h2>
            <h2 className="w-auto my-5 text-sm text-left text-white cursor-pointer hover:opacity-100 opacity-70">
              Peja
            </h2>
            <h2 className="my-5 text-sm text-white cursor-pointer hover:opacity-100 opacity-70">
              Prishtina
            </h2>
            <h2 className="my-5 text-sm text-white cursor-pointer hover:opacity-100 opacity-70">
              Prizreni
            </h2>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 ">
            <h2 className="mb-1 lg:mb-[34px] font-semibold text-white tracking-wide text-xl">
              Lokacionet
            </h2>
            <ul className="space-y-0.5 lg:space-y-[20px] text-sm list-none">
              <li>
                <a className="text-white cursor-pointer hover:opacity-100 opacity-70">
                  Rugova
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:opacity-100 opacity-70">
                  Brezovica
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:opacity-100 opacity-70">
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
                <a className="text-white cursor-pointer hover:opacity-100 opacity-70">
                  Prishtina
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:opacity-100 opacity-70">
                  Rugova
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:opacity-100 opacity-70">
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
            <i className="m-2 text-gray-400 fab fa-twitter hover:text-white"></i>
          </a>
          <a href="http://www.linkedin.com/">
            <i className="m-2 text-gray-400 fab fa-linkedin-in hover:text-white"></i>
          </a>
          <a href="http://www.facebook.com/">
            <i className="m-2 text-gray-400 fab fa-facebook-f hover:text-white"></i>
          </a>
        </div>
        <div className="flex justify-end w-full mt-1">
          <p className="text-sm text-white opacity-70">KOSTOUR 200000</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
