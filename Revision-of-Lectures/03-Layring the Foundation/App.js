import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { key: "h1" }, "How are you");

// const namaste = React.createElement("h1", {}, "Namaste React", [heading]);

// const about = React.createElement("li", {}, "About us");
// const support = React.createElement("li", {}, "Support");
// const home = React.createElement("li", {}, "Home");

// const ul = React.createElement("ul", {}, [namaste, about, support, home]);

// const header = React.createElement(
//   "div",
//   { className: "header" },
//   "Namaste React"
// );

// We won't write react like this.
// -------------------------

// REACT COMPONENT

const heading = (
  <h1 id="title" key="h2">
    Jagdish Kumawat
  </h1>
);

const Title = () => {
  return <h1>Functional Component</h1>;
};

const Header = () => {
  return (
    <div>
      {/* we have to import like this if we want to import function  */}
      <Title />
      {/* we can do like also because it at the end it is an functional component */}
      {Title()}
      {heading}
      <h1>Namaste React</h1>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(ul);  //if we have to render react element we use this

root.render(<Header />);
