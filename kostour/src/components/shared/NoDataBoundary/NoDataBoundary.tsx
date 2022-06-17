import React from "react";

type Props = {
  dataLength: number | undefined;
  children?: React.ReactNode | JSX.Element;
  text?: string;
  className?: string;
};

const NoDataBoundary = ({
  dataLength,
  children,
  text = "No data found!",
  className,
}: Props): any => {
  if (!dataLength && dataLength !== 0) {
    return null;
  }

  if (dataLength < 1)
    return (
      <div
        className={`flex flex-col items-center justify-center mt-4 ${className} `}
      >
        <span className="text-gray-400">{text}</span>
        {/* <SearchIcon className="w-8 !m-0" color="gray" /> */}
      </div>
    );

  return children;
};

export default NoDataBoundary;
