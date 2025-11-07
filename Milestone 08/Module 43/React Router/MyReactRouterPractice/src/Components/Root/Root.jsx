import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <h1>This is Root</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
