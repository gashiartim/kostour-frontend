import React from "react";
import L from "leaflet";
import { Icon } from "@/components/shared/Icon/Icon";
import ReactDOMServer from "react-dom/server";

export const icon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <Icon
      icon="blue-location-icon"
      className="text-2xl w-[40px] h-[40px] !text-blue-400"
    />
  ),
});
