import React from "react";
import cs from "classnames";
import { Icon } from "../Icon/Icon";

interface Props {
  src: string | undefined;
  id?: string;
  photoId: string;
  name?: string;
  onDelete: (id: string) => void;
  className?: string;
}

export const Image = (props: Props) => {
  return (
    <div
      className={cs(
        "edit-modal-photo w-[106px] h-[98px] rounded-3 border-1 border-gray-300 relative",
        props.className
      )}
    >
      <img
        alt="Image"
        className="!w-full !h-full !rounded-[20px] !object-cover"
        src={props.src}
      />

      <div className="bg-opacity-40 absolute left-0 top-0 w-full h-full flex justify-center edit-event z-[2] opacity-1">
        <div
          className="absolute bottom-0 z-10 flex flex-col opacity-0 edit-event edit-event-content"
          onClick={() => {
            props.id ? props.onDelete(props.id) : props.onDelete(props.photoId);
          }}
        >
          {/* <Icon
            icon="exit-icon"
            className="mx-auto mb-2 !text-red-600 !fill-[red]"
          /> */}
        </div>
      </div>
    </div>
  );
};
