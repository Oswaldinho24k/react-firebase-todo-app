import React from "react";
import { useHistory } from "react-router-dom";

import { gmailLogin } from "../services/firebase";

function Auth() {
  const history = useHistory();

  const handleClick = () => {
    gmailLogin().then((r) => {
      console.log(r);
      history.push("/");
    });
  };

  return (
    <div className="auth">
      <button onClick={handleClick}>Inicia</button>
    </div>
  );
}

export default Auth;
