import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import RestaurantCart from "./components/RestaurantCart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import { restaurants } from "./utils/mockData";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  console.log(restaurants);
  return (
    <div>
      <Header />
      <Outlet />
      <RestaurantCart restaurants={restaurants} />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenuPage /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
