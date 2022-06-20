import React from "react";

type Props = {
  children: JSX.Element | React.ReactNode;
};

const GridContainer = ({ children }: Props) => {
  return (
    <div className="grid gap-4 mx-auto lg:mx-0 md:grid-cols-2 xl:grid-cols-3 w-max">
      {children}
    </div>
  );
};

export default GridContainer;
