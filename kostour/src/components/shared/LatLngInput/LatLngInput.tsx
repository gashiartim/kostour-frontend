import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("../../Map/Map"), { ssr: false });

type Props = {
  handleMarkerLocationChange: any;
  lat: any;
  lng: any;
  errors: any;
};

const LatLngInput = ({
  handleMarkerLocationChange,
  lat,
  lng,
  errors,
}: Props) => {
  return (
    <div>
      <div className="relative h-[350px] min-w-[400px] max-w-full mb-8 ">
        <label
          htmlFor=""
          className="block mb-1 mr-auto text-sm font-semibold w-max"
        >
          Please pick a location on the map below
        </label>
        <Map
          markerPosition={{ lat: Number(lat), lng: Number(lng) }}
          onMapClick={handleMarkerLocationChange}
          className="z-10 mb-5 !rounded-md overflow-hidden"
          draggableMarker={true}
        />

        {(errors.lat || errors.lng) && (
          <pre className="left-0 ml-2 -mt-4 font-sans text-xs text-red-600 w-max">
            {errors.lat?.message || errors.lng?.message}
          </pre>
        )}
      </div>
    </div>
  );
};

export default LatLngInput;
