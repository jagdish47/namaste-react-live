import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantCart from "./components/RestaurantCart";
import { restaurants } from "./utils/mockData";

function App() {
  console.log(restaurants);
  return (
    <div>
      <Header />

      <RestaurantCart restaurants={restaurants} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
