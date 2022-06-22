import { Pin } from "../Pin/Pin";

interface Props {
  position?: { lat: number; lng: number };
  onMarkerRelease?: (data: any) => void;
}

export function DraggableMarker(props: Props) {
  function onPositionChange(location: any) {
    props.onMarkerRelease && props.onMarkerRelease(location);
  }

  if (!props.position?.lat || !props.position.lng) return null;

  return (
    <Pin
      position={[props.position.lat, props.position.lng]}
      draggable={true}
      noPopup
      noTooltip
      noCircle
      onMarkerRelease={onPositionChange}
    />
  );
}
