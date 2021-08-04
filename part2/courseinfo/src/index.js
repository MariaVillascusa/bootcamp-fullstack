import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  console.log(course.parts)
  const content = course.parts.map((part) => {
    console.log(part.name)
    return <Part part={part} key={part.id} />
  })
  return content;
}

const Total = ({ course }) => {
  const total = course.parts.reduce(
    (prev, current) => prev + current.exercises,
    0
  );
  return <p><strong>Total of {total} exercises</strong></p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))