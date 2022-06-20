import { DevTool } from "@hookform/devtools";
import React from "react";
import { Control } from "react-hook-form";
import cs from "classnames";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: React.ReactNode | any;
  handleCancel?: () => void;
  control: Control<any, object> | undefined;
  className?: string;
};

const Form = ({
  onSubmit,
  children,
  control,
  handleCancel,
  className,
}: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div
        className={cs(
          "grid w-full gap-4 lg:grid-cols-2 xl:grid-cols-3",
          className
        )}
      >
        {children}
      </div>
      <DevTool control={control} />
    </form>
  );
};

export default Form;
