const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "Luna 1", animal: "Dog 1", breed: "Havanese 1" }),
      React.createElement(Pet, { name: "Luna 2", animal: "Dog 2", breed: "Havanese 2" }),
      React.createElement(Pet, { name: "Luna 3", animal: "Dog 3", breed: "Havanese 3" })
    ]
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));