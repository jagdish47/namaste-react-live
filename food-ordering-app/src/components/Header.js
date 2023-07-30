import Login from "./Login";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid black",
        alignItems: "center",
        justifyContent: "center",
        gap: "800px",
      }}
    >
      <div>
        <img
          style={{ height: "150px", width: "150px" }}
          src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"
          alt="logo-here"
        />
      </div>
      <ul style={{ display: "flex", listStyle: "none", gap: "30px" }}>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <Login />
      </ul>
    </div>
  );
}

export default Header;
