import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto h-full w-full flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-[25px]" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-bteween items-center bg-transperent px-6 gap-2">
            <img alt="Lock" src={lock} />
            Login
          </button>
          <button className="bg-[#20B486] px-8 py-3 rounded-md text-white font-bold">
            Sign Up For Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleToggle}>
          <img
            alt="Menu"
            src={toggle ? close : hamburgerMenu}
            className="md:hidden"
          />
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center">
            Home
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center">
            About
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center">
            Support
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center">
            Platform
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center">
            Pricing
          </li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#20B486] flex justify-center items-center bg-transperent px-6 gap-2 py-4">
              <img alt="Lock" src={lock} />
              Login
            </button>
            <button className="bg-[#20B486] px-8 py-5 rounded-md text-white font-bold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
