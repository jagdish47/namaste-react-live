import Logo from "../../Images/food-villa-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const LoggedInUser = () => {
//   return false;
// };

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28"
        // src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
        src={Logo}
        alt="logo-here"
      ></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  console.log(isOnline);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <h1>{isOnline ? "Online" : "Offline"}</h1>

      <div className="flex justify-around">
        <Title />

        {/* {user.name}

        <h3>{user.name}</h3> */}

        <ul className="flex items-center justify-center w-96">
          <Link to="/">
            {" "}
            <li className="pl-4">Home</li>{" "}
          </Link>

          <Link to="/about">
            {" "}
            <li className="pl-4">About</li>{" "}
          </Link>

          <Link to="/contact">
            <li className="pl-4">Contact</li>
          </Link>

          <Link to="/instamart" className="pl-4">
            <li>Instamart</li>
          </Link>

          <Link to="/cart">
            <li>Cart - {cartItems.length} Item</li>
          </Link>
        </ul>

        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Log-in
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log-out
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
