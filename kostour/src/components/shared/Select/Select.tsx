import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import cs from "classnames";
import { Noop } from "react-hook-form";

export interface Option<T = any> {
  file?: { media: { url: string } };
  name: string;
  id: string;
  options: T;
  event_title?: string;
}
export interface SelectProps {
  data?: Array<Option> | undefined | Array<any>;
  selected?: Option | any;
  onChange: (option: Option) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  menuClassName?: string;
  preClassName?: string;
  wrapperClassName?: string;
  selectClassName?: string;
  onBlur?: Noop;
  clearState?: any;
}

export default function Select(props: SelectProps) {
  return (
    <div className={cs("", props.className)} onBlur={props.onBlur}>
      <Listbox value={props.selected} onChange={props.onChange}>
        <div className={cs("relative", props.wrapperClassName)}>
          <Listbox.Button
            className={cs(
              "relative w-[250px] py-2.5  flex items-center pl-2 !text-sm text-left bg-[#22272E] border-1 border-gray-700  cursor-default  rounded-2  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm justify-between",
              props.selectClassName
            )}
            placeholder="Select category"
          >
            <span
              className={cs(
                "block text-white !text-sm truncate hover:cursor-pointer",
                {
                  "text-white": !props.selected?.name,
                }
              )}
            >
              {props.selected?.name ? props.selected?.name : props.placeholder}
            </span>
            {props.selected?.name ? (
              props.clearState ? (
                <>
                  <span
                    onClick={() =>
                      props.clearState && props.clearState("category")
                    }
                    className=" inset-y-0 ml-1 !right-3 mr-[10px] p-[2px] top-3  cursor-pointer hover:bg-gray-200 rounded-full  flex items-center justify-center !z-0"
                  >
                    {/* <Icon
                      icon="close"
                      className="text-gray-400 my-icon"
                      aria-hidden="true"
                    /> */}
                  </span>
                </>
              ) : (
                <span className="inset-y-0 right-0 flex items-center pr-2 ml-1 pointer-events-none ">
                  <Icon
                    icon="arrow"
                    className="w-5 h-2 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              )
            ) : (
              <span className="inset-y-0 right-0 flex items-center pr-2 ml-1 pointer-events-none ">
                <Icon
                  icon="arrow"
                  className="w-5 h-2 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={cs(
                "absolute w-full   py-1 mt-1 overflow-auto text-sm bg-[#22272E] rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none !z-20 scrollbar",
                props.menuClassName
              )}
            >
              {props.data?.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active, selected }) =>
                    cs(
                      "cursor-default select-none relative py-2 pl-2 text-white pr-4",
                      { "text-darkBlue ": active },
                      {
                        "bg-dropDown": selected,
                      }
                    )
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium " : "font-normal"
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {props.error && (
        <pre
          className={cs(
            "h-2 m-0 ml-2 mt-0.5 text-xs font-sans text-red-500",
            props.preClassName
          )}
        >
          {props.error}
        </pre>
      )}
    </div>
  );
}
