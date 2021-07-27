import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);
const Content = (props) => {
  const content = props.parts.map((part) => (
    <Part part={part.name} exercise={part.exercises} key={part.name} />
  ));
  return content;
};

const Total = (props) => {
  let total = 0;
  props.parts.map((part) => (total += part.exercises));
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
