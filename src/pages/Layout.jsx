import React from "react";
import { Header, Footer, Container } from "../components/";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Container className="mt-16">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
