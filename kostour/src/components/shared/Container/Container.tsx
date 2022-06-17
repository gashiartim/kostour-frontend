import React from "react";
import Footer from "../../Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="relative h-screen overflow-y-scroll dark:bg-black !max-w-[100vw] w-full !p-0 !m-0">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
