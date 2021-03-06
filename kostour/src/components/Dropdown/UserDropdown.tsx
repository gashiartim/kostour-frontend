import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import cs from "classnames";
import { Icon } from "../shared/Icon/Icon";
import { useRouter } from "next/router";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

export interface IUserDropdownProps {
  options?: Array<{
    id: string;
    name: string;
    to?: string;
    onClick?: () => void;
    mobile?: boolean;
    show?: boolean;
  }>;
}

export function UserDropdown(props: IUserDropdownProps) {
  const router = useRouter();
  const authCtx = useAuthContext();

  const options = authCtx.isAuthenticated
    ? [
        {
          id: "3",
          name: "Dashboard",
          onClick: () => router.push("/dashboard"),
        },
        {
          id: "4",
          name: authCtx.isAuthenticated ? "Log out" : "Log in",
          onClick: authCtx.isAuthenticated
            ? () => authCtx.logout()
            : () => router.push("/login"),
        },
      ]
    : [
        {
          id: "5",
          name: "login",
          onClick: () => router.push("/login"),
        },
      ];

  return (
    <Menu
      as="div"
      className="relative inline-block text-left focus:!outline-none active:!outline-none "
    >
      <Menu.Button>
        <div className="flex items-center px-3.5 py-2.5  border-opacity-40 rounded-2.5  opacity-50">
          <Icon
            icon="user"
            className="!text-[#3F86F0] bg-[#3F86F0] rounded-full !fill-white -mt-1"
          />
          {authCtx.user?.first_name && authCtx.user?.first_name !== null && (
            <div className="mx-2 text-white">{`${authCtx.user?.first_name} ${authCtx.user?.last_name}`}</div>
          )}
          <span className="ml-2">
            <Icon icon="arrow" className="text-[#3F86F0]" />
          </span>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white border-2 border-gray-400 divide-y divide-gray-100 shadow-lg w-52 ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-3">
            {options.map((option) => {
              const { id, ...rest } = option;

              return (
                <Menu.Item
                  key={option.id}
                  // disabled={authCtx.user?.profile.business === null}
                >
                  {({ active }) => (
                    <button
                      className={cs({
                        ["block w-full opacity-40 uppercase text-sm text-left font-bold leading-4 py-3 pl-6 hover:bg-gray-100 transition-colors duration-75 ease-out hover:opacity-100"]:
                          true,
                      })}
                      {...rest}
                    >
                      {option.name}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
