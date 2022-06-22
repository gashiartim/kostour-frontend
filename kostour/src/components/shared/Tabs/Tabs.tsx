import React from "react";
import { Tab } from "@headlessui/react";
import cs from "classnames";

export interface ITab {
  id: number;
  name: string;
}

export interface IPanel {
  id: number;
  name?: string;
  element: JSX.Element | React.ReactNode;
}

type Props = {
  tabs: Array<ITab>;
  panels: Array<IPanel>;
};

const Tabs = ({ tabs, panels }: Props) => {
  return (
    <Tab.Group>
      <div className="justify-between p-5 md:flex">
        <Tab.List className="flex flex-col mb-5 text-left lg:items-start lg:mb-0">
          {tabs.map((tab) => (
            <Tab key={tab.id} className="focus:outline-none">
              {({ selected }) => (
                <button
                  className={cs({
                    "text-lg leading-[23px] text-[#B4B5B7] mb-4 focus:outline-none default-transition":
                      true,
                    "px-[22px] lg:py-[14px] lg:border-l-[3px] focus:outline-none  border-[#3F86F0] dark:!text-white font-bold":
                      selected,
                  })}
                >
                  {tab.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full max-w-[915px] default-transition">
          <div className="w-full default-transition">
            {panels.map((panel, idx) => (
              <Tab.Panel key={`panel-${idx}-${panel.id}`}>
                {panel.element}
              </Tab.Panel>
            ))}
          </div>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Tabs;
