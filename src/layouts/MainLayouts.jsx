import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
