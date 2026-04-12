import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
          to={"/books"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
          to={"/page-to-read"}
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
            >
              {links}
              <div className="flex items-center my-4 gap-2">
                          <button className="btn btn-success text-white">Signin</button>
          <button className="btn btn-accent text-white">Signup</button>
              </div>
            </ul>
          </div>
          <Link to={"/"}>
          <div className=" flex items-center gap-1">
          <img className="w-12" h-12 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWB8E_qe2Wb_BQAiyxooHYQy8DwCDDi2Tzw&s" alt="Logo-image" />
          <h2 className="font-extrabold text-gray-500 text-[12px] md:text-lg lg:text-xl ">BOOK VIBE</h2> 
          </div>
            
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4 hidden lg:flex">
          <button className="btn btn-success text-white">Signin</button>
          <button className="btn btn-accent text-white">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
