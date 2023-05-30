import Logo from "../../Images/food-villa-logo.png";

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
  return (
    <>
      <div className="nav-item">
        <Title />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
