import React from "react";
import Navvar from "../src/Componets/Navvar/Navvar.jsx";
import Footer from "../src/Componets/Footer/Footer.jsx";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navvar></Navvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
