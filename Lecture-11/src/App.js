import React, { Suspense, createElement, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import Instamart from "./components/Instamart.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";

// const burgerKing = {
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ozyardjn0b2t66ppbfv6",
//   name: "McDonald's",
//   cusine: ["American", "French"],
//   rating: "4.2",
// };

const Instamart = () => import("./components/Instamart.js");

const AppLayout = () => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user: user }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Jagdish Kumawat",
              email: "jagdishkumawat81@gmail.com",
            }}
          />
        ),
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //it's like take the parent path about/profile =>
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
