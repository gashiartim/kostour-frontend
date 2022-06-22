import React from "react";
import L from "leaflet";

import ReactDOMServer from "react-dom/server";
import { Icon } from "../../shared/Icon/Icon";

export const icon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(<Icon icon="pin" />),
});
