import React from "react";
import { useWindowWidth } from "../../../lib/hooks/useWindowWidth";
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
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
