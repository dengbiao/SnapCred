import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "@styles/components/layout/Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
