import React from "react";
import Header from "./component/Header";
import TopMenu from "./component/TopMenu";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

const Layout = () => {
  return (
    <>
 
    <TopMenu/>
      <Header />
      <div id="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
