import router, { useRouter } from "next/router";
import cs from "classnames";
import { Icon } from "../shared/Icon/Icon";
import Link from "next/link";

const navItems = [
  { title: "home", link: "/" },
  { title: "activities", link: "/activities" },
  { title: "locations", link: "/locations" },
  { title: "tours", link: "/tours" },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className="container relative z-10 flex flex-col px-[200px]">
      <div className="flex  flex-row items-center justify-between">
        <div className="text-[#B0B0B0]">Dark mode</div>
        <div className="relative ">
          <i className="fas fa-user-circle text-[22px] mr-2"></i>
          Hello
          <i className="fas fa-chevron-down text-blue ml-6"></i>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div
          className="flex items-center cursor-pointer w-full"
          onClick={() => router.push("/")}
        >
          <Icon icon="KOS-TOUR" className="h-14 text-black " />
        </div>

        <div className="font-bold ">
          <ul className="hidden sm:flex">
            {navItems.map((item) => (
              <li
                key={item.title}
                className={cs(
                  "mx-3.5  uppercase hover:decoration-blue-800  hover:underline bg-blue  transition-w duration-500 hover:w-[98%] text-base font-bold md:tracking-[4px] text-white",
                  {
                    "text-primary decoration-sky-500/30":
                      pathname === item.link,
                  }
                )}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
