import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header className="pt-2 pb-2">
      <Navbar className="row">
        {/* Work on this styling a bit more -- center on mobile */}
        <Nav className="col d-flex justify-content-around">
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
      </Navbar>
    </header>
  );
}
