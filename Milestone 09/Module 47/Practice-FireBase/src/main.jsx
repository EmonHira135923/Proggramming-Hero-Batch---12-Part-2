import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root/Root";
import Home from "./Compontes/HomeCompontes/Home";
import About from "./Compontes/AboutComponets/About";
import LogIn from "./Compontes/LogIn/LogIn";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: LogIn },
      { path: "/about", Component: About },
    ],
  },
]);

const Router = createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
