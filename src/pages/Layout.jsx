import React from "react";
import { Header, Footer } from "../components/";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      layout
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
