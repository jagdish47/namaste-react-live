import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <Cart data={data} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
