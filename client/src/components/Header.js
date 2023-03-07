import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <header>
      <Nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/look"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          LOOK
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
      </Nav>
    </header>
  );
}
