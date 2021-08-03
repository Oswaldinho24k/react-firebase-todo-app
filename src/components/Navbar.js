import React from "react";
import { FaListAlt, FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <FaListAlt /> Tasky
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
