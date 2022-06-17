import React from "react";
import Spinner from "../Spinner/Spinner";
import cs from "classnames";

type Props = {
  loading: boolean;
  children: React.ReactNode | JSX.Element;
  className?: string;
  loadingMessage?: string;
};

const LoadingBoundary = ({
  loading,
  children,
  className,
  loadingMessage,
}: Props): any => {
  if (loading)
    return (
      <div
        className={cs(
          "w-full  h-full flex items-center justify-center",
          className
        )}
      >
        <Spinner loadingText={loadingMessage} />
      </div>
    );

  return children;
};

export default LoadingBoundary;
