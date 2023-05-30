const heading = React.createElement(
  "h1",
  {
    id: "one",
    className: "two",
    style: {},
  },
  "Namaste React"
);

const heading2 = React.createElement("h1", {}, "Heading-2");

const div = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
