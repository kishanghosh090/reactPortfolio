import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.jsx"
import BottomNav from "./Components/BottomNav/BottomNav";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
    </>
  );
}

export default Layout;
