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
          <Nav.Item>
            <h5>Home</h5>
          </Nav.Item>
        </NavLink>
        <NavLink
          to="/look"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          <Nav.Item>
            <h5>LOOK</h5>
          </Nav.Item>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          <Nav.Item>
            <h5>About</h5>
          </Nav.Item>
        </NavLink>
      </Nav>
    </header>
  );
}
