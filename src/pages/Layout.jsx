import React from "react";
import { Header, Footer, Container } from "../components/";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container className="mt-16">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
