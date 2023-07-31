import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import RestaurantCart from "./components/RestaurantCart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { restaurants } from "./utils/mockData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  console.log(restaurants);
  return (
    <div>
      <Header />

      <RestaurantCart restaurants={restaurants} />
    </div>
  );
}

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
