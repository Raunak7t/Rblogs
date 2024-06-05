import React, { useEffect, useState } from "react";
import { Header, Footer, Container, Loading } from "../components/";
import { Outlet } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/loginFeature";
import { toast } from "react-toastify";

function Layout() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        }
        toast.success("Logged in!", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error("Please log in!", {
          position: "top-center",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {loader ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="flex-grow">
            <Container className="mt-16">
              <Outlet />
            </Container>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
