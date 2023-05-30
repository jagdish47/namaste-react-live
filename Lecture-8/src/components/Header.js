import Logo from "../../Images/food-villa-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

// const LoggedInUser = () => {
//   return false;
// };

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        // src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
        src={Logo}
        alt="logo-here"
      ></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="nav-item">
        <Title />

        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>{" "}
          </Link>

          <Link to="/about">
            {" "}
            <li>About</li>{" "}
          </Link>

          <Link to="/contact">
            <li>Contact</li>
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
