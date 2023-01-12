import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="topnav me-auto">
      <ul className="flex-row me-auto">
        <li className="mx-2 me-auto">
          <Link to="/about">About Me</Link>
        </li>
        <li className="mx-2">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-2">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;