import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import BottomNav from "./Components/BottomNav/BottomNav";
import Footer from "./Components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
      <Footer />
    </>
  );
}

export default Layout;
