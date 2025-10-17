import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">

      {/* dropdown items */}
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            ></ul>
          </div> */}


          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A]"
                    : "  border border-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookList"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A]"
                    : "  border border-white"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/readPages"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A]"
                    : "  border border-white"
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="text-[18px] font-semibold text-white bg-[#23BE0A] py-4 px-7 rounded-lg">
            Sing In
          </button>
          <button className="text-[18px] font-semibold text-white bg-[#59C6D2] py-4 px-7 rounded-lg ml-4">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
