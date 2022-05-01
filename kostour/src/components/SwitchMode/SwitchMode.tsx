import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchMode = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex text-[#B0B0B0]">
      <p className="mr-3">{enabled ? "Dark Mode" : "Light Mode"}</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="bg-black opacity-50 relative inline-flex h-6 w-14 items-center rounded-full"
      >
        <span className="sr-only">Mode</span>
        <span
          className={`${
            enabled ? "translate-x-9" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-[#3F86F0]`}
        />
        <span
          className={`${
            enabled ? "-translate-x-3 text-sm" : "translate-x-2 text-sm"
          } `}
        >
          {enabled ? "OFF" : "ON"}
        </span>
      </Switch>
    </div>
  );
};
export default SwitchMode;
