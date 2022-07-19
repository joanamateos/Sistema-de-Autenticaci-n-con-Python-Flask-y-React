import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { actions } = useContext(Context);
  const [user, setUser] = useState({});
  const history = useHistory();

  const login = async () => {
    try {
      const response = await fetch(
        "https://3001-4geeksacade-reactflaskh-x03af0h9dgd.ws-eu54.gitpod.io/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        actions.verify();
        history.push("/private");
      } else {
        alert("Hola");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <label htmlFor="email" className="col-1">
          Email
        </label>
        <input
          id="email"
          className="col-3"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password" className="col-1">
          Contraseña
        </label>
        <input
          id="password"
          className="col-3"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button className="col-2 offset-1" onClick={() => login()}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};
