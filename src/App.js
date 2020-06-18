import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  console.log(props.isMovie);
  return (
    <div>
      <h1>i like {props.name}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Movie name="kimchi" isMovie={true} />
    </div>
  );
}

export default App;
