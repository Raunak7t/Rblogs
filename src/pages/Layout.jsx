import React, { useEffect } from "react";
import { Header, Footer, Container } from "../components/";
import { Outlet } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/loginFeature";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData));
      }
    });
  }, []);

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
