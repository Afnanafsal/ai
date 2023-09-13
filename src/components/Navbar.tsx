import React from "react";

import { logo } from "../assets";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <div className="bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 p-3 items-center justify-center bg-clip  rounded-xl flex-col flex">
        <img src={logo} alt="ax-sum_logo" className="w-16 object-clip" />
        <h3 className="font-extrabold font-satoshi text-white">AXI-SUM</h3>
      </div>

      <button
        type="button"
        onClick={() =>
          window.open("https://www.linkedin.com/in/afnanafsal/", "_blank")
        }
        className=" black_btn font-extrabold font-satoshi"
      >
        Developer
      </button>
    </nav>
  );
};

export default Navbar;
