import React, { useState, useEffect } from "react";
import { FaListAlt } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(
    () => {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      setUser(currentUser);
      return () => {
        setUser(null);
      };
    },
    [location]
  );

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <FaListAlt /> Tasky
        </Link>
      </div>
      {user && (
        <div>
          <img className="userImage" alt="userImage" src={user?.photoURL} />
          <span> {user?.displayName.slice(0, 14)}</span>
          <div className="divider">|</div>
          <span onClick={logout}>Logout</span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
