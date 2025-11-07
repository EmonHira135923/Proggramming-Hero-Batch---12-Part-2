import React from "react";
import { NavLink } from "react-router";
import "./Navvar.css";

const Navvar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
};

export default Navvar;
