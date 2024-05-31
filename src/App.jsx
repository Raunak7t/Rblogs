import React from "react";
import { Outlet } from "react-router-dom";
import { LandingPage } from "./pages";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
