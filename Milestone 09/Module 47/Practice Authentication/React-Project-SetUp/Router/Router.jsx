import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home.jsx";
import Register from "../Pages/Register/Register.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/register", Component: Register },
    ],
  },
]);

export default Router;
