const Title = () => {
  return (
    <img
      src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      alt="logo-here"
    />
  );
};

const Links = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

const Header = () => {
  return (
    <div className="nav-container">
      <Title />
      <Links />
    </div>
  );
};

export default Header;
