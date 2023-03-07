import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header className="pt-2 pb-2">
      <Navbar className="row">
        <Nav className="col-sm-flex justify-content-center">
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
