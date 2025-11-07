import React from "react";
import { NavLink, Outlet } from "react-router";
import Navvar from "../Compontes/NavvarComponets/Navvar";
import Footer from "../Compontes/FooterComponets/Footer";

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
