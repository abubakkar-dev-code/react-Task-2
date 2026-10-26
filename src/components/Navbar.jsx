import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/img/logo.svg";

const Navbar = () => {
  return (
    <div className="p-3 border-b border-gray-400">
      <div className="flex justify-between items-center max-w-300 mx-auto">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" />
          <p className="text-xl font-semibold">Marigold Roasters</p>
        </div>
        <div className="flex gap-7 font-semibold">
          <Link to="/coffees">Coffees</Link>
          <Link to="/visit">Visit</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
