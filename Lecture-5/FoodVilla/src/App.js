import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import T from "./components/Title.js";
import Body from "./components/Body";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
