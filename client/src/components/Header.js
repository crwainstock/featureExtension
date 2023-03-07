import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

export default function Header() {
  const activeStyle = {
    "font-weight": "bold",
    "text-decoration": "underline",
    color: "#161616",
  };

  return (
    <header>
      <Nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/look"
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          LOOK
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
      </Nav>
    </header>
  );
}
