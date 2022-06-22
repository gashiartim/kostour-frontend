import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import localforage from "localforage";

const THEME_COLOR_LOCALSTORAGE_KEY = "THEME_MODE";

const SwitchMode = () => {
  const [enabled, setEnabled] = useState(false);

  async function handleModeChange() {
    !enabled
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");

    !enabled
      ? await localforage.setItem(THEME_COLOR_LOCALSTORAGE_KEY, "LIGHT")
      : await localforage.setItem(THEME_COLOR_LOCALSTORAGE_KEY, "DARK");
  }

  async function loadThemeMode() {
    const mode = await localforage.getItem(THEME_COLOR_LOCALSTORAGE_KEY);

    if (mode && mode === "DARK") {
      return setEnabled(true);
    }
    if (mode && mode === "LIGHT") {
      return setEnabled(false);
    }
    if (!mode) {
      return setEnabled(false);
    }
  }

  useEffect(() => {
    loadThemeMode();

    // handleModeChange();
  }, []);

  useEffect(() => {
    // loadThemeMode();

    handleModeChange();
  }, [enabled]);

  return (
    <div className="flex text-[#B0B0B0]">
      <p className="mr-3">Dark Mode</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="relative inline-flex items-center h-6 bg-black rounded-full opacity-50 w-14"
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
          {!enabled ? "OFF" : "ON"}
        </span>
      </Switch>
    </div>
  );
};
export default SwitchMode;
