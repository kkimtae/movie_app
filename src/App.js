import React from "react";

function Movie(props) {
  console.log(props);
  return <h1>{props}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Movie name="KIM" isMovie={true} />
    </div>
  );
}

export default App;
