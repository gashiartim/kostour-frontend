import React, { useRef, useEffect, useState } from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import L, { DragEndEvent } from "leaflet";
import { icon } from "../../Map/Icon/Icon";
// import LocationIcon from "../CustomIcons/LocationIcon";
// import LocationPopup from "../Popups/LocationPopup";
// import { ILocation } from "../../../../api/Location";

export interface IPinProps {
  position: Array<any>;
  peopleAttending?: number;
  marker?: any;
  id?: string;
  name?: string;
  description?: string;
  date?: string;
  time?: string;
  address?: string;
  draggable?: boolean;
  noPopup?: boolean;
  noTooltip?: boolean;
  noCircle?: boolean;
  files?: Array<any>;
  onMarkerRelease?: (data: any) => void;
}

// const icon = L.divIcon({
//   className: "custom-icon",
//   html: ReactDOMServer.renderToString(<LocationIcon />),
// });

export function Pin(props: IPinProps) {
  const {
    position,
    peopleAttending = 0,
    draggable = false,
    noPopup = false,
    noTooltip = false,
    onMarkerRelease,
    name,
    description,
    marker,
  } = props;
  const popupRef = useRef(null);
  const markerRef = useRef(null);

  if (!position || !position[0] || !position[0]) return null;

  return (
    <>
      <Marker
        ref={markerRef}
        position={[parseFloat(position[0]), parseFloat(position[1])]}
        icon={icon}
        draggable={draggable}
        eventHandlers={{
          dragend: (event: DragEndEvent) => {
            if (onMarkerRelease) {
              onMarkerRelease(event.target._latlng);
            }
          },
        }}
      >
        {/* {!noPopup && (
          <Popup
            closeButton={false}
            zoomAnimation={true}
            className="p-0 m-0 !min-w-[300px]"
            ref={popupRef}
          >
            <LocationPopup
              title={name || ""}
              description={description || ""}
              id={marker?.id || ""}
            />
          </Popup>
        )} */}

        {/* sticky tooltip */}
        {/* {!noTooltip && (
          <Tooltip
            sticky={true}
            position={[parseFloat(position[0]), parseFloat(position[1])]}
            className="relative flex items-center justify-center bg-transparent border-gray-300 w-28 h-11 border-1 rounded-60px bg-none"
            permanent={popupOpenned}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <h3 className="text-sm ">
                <span className="font-bold">{peopleAttending}</span> test
              </h3>
              <span className="absolute -left-2 top-1/3 h-11">🙂</span>
            </div>
          </Tooltip>
        )} */}
      </Marker>
    </>
  );
}
