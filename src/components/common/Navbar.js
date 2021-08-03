import React from "react";
import { FaListAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <FaListAlt /> Tasky
        </Link>
      </div>

      <div>
        <span>
          <FaUserAlt /> User
        </span>
        <div className="divider">|</div>
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Navbar;
