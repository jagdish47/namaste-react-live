import Logo from "../../Images/food-villa-logo.png";
import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
