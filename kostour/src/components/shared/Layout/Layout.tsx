import React from "react";
import { useWindowWidth } from "../../../lib/hooks/useWindowWidth";
import Chat from "../../Chat/Chat";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Container from "../Container/Container";
import SandwichMenu from "../SandwichMenu/SandwichMenu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { mobile } = useWindowWidth();
  return (
    <Container>
      {!mobile ? <Header /> : <SandwichMenu />}
      <div className="min-h-[60vh]">{children}</div>
      <div className="fixed !z-[1000] ml-auto right-[80px] w-max bottom-[55px]">
        <Chat />
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
