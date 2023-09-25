import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar rounded-lg mt-2 flex gap-4 md:gap-0 flex-col md:flex-row justify-between items-center">
      <div className="flex-1">
        <Link to="/">
          <img src="Logo.png" alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-12">
          <li className="text-white hover:underline">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                    textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Home
            </NavLink>
            
          </li>
          <li className="text-white hover:underline">
            <NavLink
              to="/donation"
              style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                    textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Donation
            </NavLink>
            
          </li>
          <li className="text-white hover:underline">
            <NavLink
              to="/statistics"
              style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                    textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
