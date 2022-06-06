import router, { useRouter } from "next/router";
import cs from "classnames";
import { Icon } from "../shared/Icon/Icon";
import Link from "next/link";
import { UserDropdown } from "../Dropdown/UserDropdown";
import SwitchMode from "../SwitchMode/SwitchMode";

const navItems = [
  { title: "home", link: "/" },
  { title: "activities", link: "/activities" },
  { title: "locations", link: "/locations" },
  { title: "tours", link: "/tours" },
  { title: "about", link: "/about" },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className="container relative z-10 flex flex-col p-5 mx-auto  md:p-[20px]">
      <div className="flex flex-row items-center justify-between">
        <SwitchMode />

        <div className="relative ">
          <UserDropdown />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div
          className="flex items-center w-full cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Icon icon="KOS-TOUR" className="text-black " />
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
