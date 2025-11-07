import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navvar = () => {
  const navbar = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  const [toggle, settoggle] = useState(true);

  const navvardata = navbar.map((router) => (
    <li
      className="flex items-center gap-5 rounded-xl p-3 hover:text-white hover:bg-gray-400"
      key={router.id}
    >
      <a href={router.path}>{router.name}</a>
    </li>
  ));

  return (
    <nav className="p-5 bg-gray-50 shadow-md ">
      <div className="flex justify-between gap-5 items-center mt-3 text-xl font-bold ">
        {/* start */}
        <div className="flex items-center gap-2">
          <div className="md:hidden flex">
            <button onClick={() => settoggle(!toggle)}>
              {toggle ? <Menu /> : <X />}
            </button>
          </div>
          <h1 className="cursor-pointer">My Logo</h1>
        </div>
        <div
          className={` md:hidden mt-1 ml-1 absolute bg-gray-300 p-5 rounded-xl ${
            toggle ? "-top-80 " : " top-22 -left-0 "
          }`}
        >
          {navvardata}
        </div>
        <div className="md:flex items-center gap-5 hidden">{navvardata}</div>
        {/* end */}
        <div>
          <button className="btn bg-gray-400 text-xl py-6 px-5 md:p-7 md:w-40 hover:bg-gray-700 hover:text-white">
            Click Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navvar;
