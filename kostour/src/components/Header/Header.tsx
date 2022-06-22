import router, { useRouter } from "next/router";
import cs from "classnames";
import { Icon } from "../shared/Icon/Icon";
import Link from "next/link";
import { UserDropdown } from "../Dropdown/UserDropdown";
import SwitchMode from "../SwitchMode/SwitchMode";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

interface Props {
  className?: string;
}

const navItems = [
  { title: "home", link: "/" },
  { title: "restaurants", link: "/restaurants" },
  { title: "locations", link: "/locations" },
  // { title: "tours", link: "/tours" },
  { title: "about", link: "/about" },
  { title: "login", link: "/login" },
];

const Header = ({ className }: Props) => {
  const { pathname } = useRouter();
  const { user } = useAuthContext();
  console.log({ user });

  return (
    <div className={cs("px-4 xl:px-0")}>
      <div className="relative w-auto z-20 flex flex-col py-5 mx-auto md:py-[20px]">
        <div className="flex flex-row items-center justify-between">
          <SwitchMode />

          {user && (
            <div className="relative ">
              <UserDropdown />
            </div>
          )}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div
            className="flex items-center w-full cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Icon icon="KOS-TOUR" className="text-black " />
          </div>

          <div className="font-bold ">
            <ul className="hidden text-white sm:flex">
              {navItems.map((item, idx) => {
                if (user && item.link === "/login") return null;

                return (
                  <li
                    key={item.title}
                    className={cs(
                      "mx-3.5  uppercase hover:decoration-blue-800  hover:underline bg-blue  transition-w duration-500 hover:w-[98%] text-base font-bold md:tracking-[4px]",
                      {
                        "text-primary decoration-sky-500/30":
                          pathname === item.link,
                        "mr-0": idx >= navItems.length - 1 && user,
                      }
                    )}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 z-10 h-[100px] bg-gradient-to-b from-black opacity-80"></div>
    </div>
  );
};
export default Header;
