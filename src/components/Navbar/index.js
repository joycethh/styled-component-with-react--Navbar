import React from "react";
import { NavLink, Bars, NavMenu, Nav } from "./NavbarElements";

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">
        <h1>JT</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/work" activeStyle>
          {" "}
          Work{" "}
        </NavLink>
        <NavLink to="/about" activeStyle>
          {" "}
          About{" "}
        </NavLink>
        <NavLink to="/contact" activeStyle>
          {" "}
          Contact{" "}
        </NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
