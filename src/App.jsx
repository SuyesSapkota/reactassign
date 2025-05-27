import React from "react";
import Heading from "./separate.jsx/Heading";
import About from "./separate.jsx/About";

function App() {
  return (
    <div>
      <Heading />
      <About
        title="About React"
        content="React is a JavaScript library for building user interfaces."
      />
      <About
        title="Why Learn React?"
        content="React makes it easy to build dynamic and responsive web apps."
      />
    </div>
  );
}

export default App;
