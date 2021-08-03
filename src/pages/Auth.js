import React from "react";
import { useHistory } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";

import { gmailLogin } from "../services/firebase";

function Auth() {
  const history = useHistory();

  const handleClick = () => {
    gmailLogin().then((r) => {
      history.push("/");
    });
  };

  return (
    <div className="auth">
      <h1>
        <FaListAlt /> Tasky
      </h1>
      <button onClick={handleClick}>Inicia</button>
    </div>
  );
}

export default Auth;
