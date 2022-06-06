import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import cs from "classnames";
import { Fragment } from "react";
import useLockedBody from "../../../lib/hooks/useLockedBody";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";
import { useRouter } from "next/router";
import { Icon } from "../Icon/Icon";

const SandwichMenu = () => {
  const authCtx = useAuthContext();
  const router = useRouter();

  const navigation = [
    { name: "home", href: "/" },
    { name: "activities", href: "/activities" },
    { name: "locations", href: "/locations" },
    { name: "tours", href: "/tours" },
    { name: "about", href: "/about" },
  ];

  const [locked, setLockedBody] = useLockedBody(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  const toggleMenu = () => {
    setLockedBody(!locked);
  };
  return (
    <Disclosure as="nav" className="bg-black z-55">
      {({ open }) => (
        <>
          <div
            className={cs(
              "mx-auto border-white border-b-1 border-opacity-20 max-w-7xl sm:px-6 lg:px-8",
              open ? "bg-black" : "bg-black"
            )}
          >
            <div className="relative flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center justify-between w-full py-5 px-7 ">
                {/* Mobile menu button*/}
                <Icon icon="KOS-TOUR" className="text-white " />
                <div onClick={toggleMenu}>
                  <Disclosure.Button className="flex flex-col items-center justify-center w-12 h-12 rounded group">
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100  "
                          : "opacity-100 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? "opacity-0"
                          : "opacity-100 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                          : "opacity-100 group-hover:opacity-100"
                      }`}
                    />
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="">
            {({ close }) => (
              <Transition
                as={Fragment}
                enter="transition ease-in-out duration-200 transform"
                enterFrom="-translate-y-1"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-200 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
              >
                <div className="absolute z-50 flex flex-col items-center w-full h-full px-2 pb-3 space-y-1 overflow-hidden text-gray-200 bg-black">
                  {navigation.map((item) => {
                    const { href, ...rest } = item;
                    return (
                      <div
                        key={item.href}
                        onClick={() => {
                          //closes menu panel
                          close();
                          //removes html body being locked (unscrollable)
                          toggleMenu();
                        }}
                      >
                        <Link href={item.href || ""}>
                          <a
                            className={cs(
                              router.pathname === item.href
                                ? "text-white"
                                : "hover:text-white",
                              "block px-5 py-5 text-2xl font-bold  text-center uppercase"
                            )}
                            {...rest}
                          >
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </Transition>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default SandwichMenu;
