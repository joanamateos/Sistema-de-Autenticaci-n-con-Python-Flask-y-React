import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const sendUserInfo = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-x03af0h9dgd.ws-eu54.gitpod.io/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    if (data.created) {
      history.push("/login");
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <label htmlFor="email" className="col-1">
          Introduce tu email
        </label>
        <input
          id="email"
          className="col-3"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password" className="col-1">
          Crea una contraseña
        </label>
        <input
          id="password"
          className="col-3"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button
          className="col-2 offset-1"
          onClick={() => sendUserInfo(email, password)}
        >
          Registrar nuevo usuario
        </button>
      </div>
    </div>
  );
};
