import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  min-height: calc(100vh - 160px); /* 减去头部和底部的高度 */
  width: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
