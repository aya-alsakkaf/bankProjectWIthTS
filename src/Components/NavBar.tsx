import React from "react";
import { Link, NavLink } from "react-router-dom";
import NAVIGATION from "../navigation";
import { isatty } from "tty";

const NavBar = () => {
  return (
    <div className="flex p-4 justify-between">
      <div>
        <h1>Image</h1>
      </div>
      <div className="flex gap-10">
        <NavLink
          to={NAVIGATION.DASHBOARD}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "hover:text-green-500"
          }
        >
          <h1>Home Page</h1>
        </NavLink>
        <NavLink
          to={NAVIGATION.PROFILE}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "hover:text-green-500"
          }
        >
          <h1>Profile</h1>
        </NavLink>
        <button className="hover:text-green-500">
          <h1>Transactions</h1>
        </button>
        <NavLink
          to={NAVIGATION.USERS}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "hover:text-green-500"
          }
        >
          <h1>Users</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
