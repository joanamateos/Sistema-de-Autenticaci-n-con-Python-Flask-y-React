import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <h1>Private Page</h1>
      <h2>{store.user.email}</h2>
    </div>
  );
};
