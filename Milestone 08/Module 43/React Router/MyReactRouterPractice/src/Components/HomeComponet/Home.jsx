import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import Header from "../Header/Header";
import "./Home.css";
import Footer from "../FooterSection/Footer";
import Aside from "../AsideComponet/aside";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      {/* <nav>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Service">Service</a>
        <a href="/Project">Project</a>
        <a href="/App">App</a>
      </nav> */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Service">Service</Link>
        <Link to="/Project">Project</Link>
        <Link to="/App">App</Link>
      </nav> */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Service">Service</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Project">Project</NavLink>
        <NavLink to="/App">App</NavLink>
        <NavLink to="/User">User</NavLink>
        <NavLink to="/User2">User2</NavLink>
      </nav>
      <div className="aside-section">
        <Aside></Aside>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
