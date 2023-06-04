import React, { useContext } from "react";
import { appContext } from "./context";

const Header = () => {
  const name = useContext(appContext);
  return <div>{name}</div>;
};

export default Header;
