import { LeafletMouseEvent } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
// import { DraggableMarker } from "./Markers/DraggableMarker";
import cs from "classnames";
import { DraggableMarker } from "../shared/Markers/DraggableMarker";
// import { Pin } from "./Pin/Pin";
// import { ILocation } from "../../../api/Location";

type Props = {
  markerPosition?: ILocationInterface;
  onMapClick?: (location: LeafletMouseEvent) => void;
  className?: string;
  draggableMarker?: boolean;
  data?: Array<any>;
  center?: { lat: number; lng: number };
};

const Map = ({
  markerPosition = { lat: 42.6629, lng: 21.1655 },
  onMapClick,
  className,
  draggableMarker = false,
  data,
  center,
}: Props) => {
  return (
    <div className={cs("w-full h-full", className)}>
      <MapContainer
        center={center ? [center.lat, center.lng] : [42.6629, 21.1655]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* //saved locations markers */}
        {/* {data?.map((marker: ILocation) => {
          return (
            <Pin
              key={`marker-${marker.id}`}
              position={[marker.lat, marker.lng]}
              name={marker.name}
              description={marker.description}
              marker={marker}
            />
          );
        })} */}

        {/* //draggableMarker to use to save a new location */}
        {draggableMarker && (
          <DraggableMarker
            position={markerPosition}
            onMarkerRelease={(event: any) => {
              if (onMapClick) {
                onMapClick(event);
              }
            }}
          />
        )}
        <MyComponent onMapClick={onMapClick} />
      </MapContainer>
    </div>
  );
};

interface ILocationInterface {
  lat: number;
  lng: number;
}

interface IMapInstance {
  onMapClick?: (location: LeafletMouseEvent) => void;
}

const MyComponent = ({ onMapClick }: IMapInstance) => {
  const map = useMapEvents({
    click: (location: LeafletMouseEvent) => {
      if (onMapClick) {
        onMapClick(location);
      }
      map.locate();
    },
    locationfound: (location: any) => {
      //   console.log("location found:", location);
    },
  });

  return null;
};

export default Map;
