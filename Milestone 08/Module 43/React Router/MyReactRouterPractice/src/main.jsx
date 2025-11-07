import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Header from "./Components/Header/Header.jsx";
import Navvar from "./Components/Navvar/Navvar.jsx";
import Root from "./Components/Root/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/HomeComponet/Home.jsx";
import About from "./Components/Aboutcomponet/About.jsx";
import Service from "./Components/ServiceComponet/Service.jsx";
import Project from "./Components/ProjectComponet/Project.jsx";
import User from "./Components/UserLoaddata/User.jsx";
import User2 from "./Components/Userloaddata2/User2.jsx";
import UserDataDetails from "./Components/Userloaddata2/UserDataDetails.jsx";

const fetchdata = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const route = createBrowserRouter([
  // {
  //   path: "/",
  //   Component: Root,
  //   children: [
  //     { index: true, Component: Header },
  //     { path: "Navvar", Component: Navvar },
  //     { path: "App", Component: App },
  //   ],
  // },

  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: Header },
      { path: "About", Component: About },
      { path: "App", Component: App },
      { path: "Service", Component: Service },
      { path: "Project", Component: Project },
      {
        path: "User",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "User2",
        element: (
          <Suspense fallback={<span>Loading....</span>}>
            <User2 fetchdata={fetchdata}></User2>
          </Suspense>
        ),
      },
      {
        path: "/Users2/:userid",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDataDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
