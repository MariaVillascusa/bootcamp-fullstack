import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Display = ({ element, text, value }) => {

  if (element === "h1") return <h1>{text}</h1>
  if (element === "p") return <p>{text}</p>
  if (element === "td") return <tr><td>{text}</td><td>{value}</td></tr>
  if (element === "tr") return <tr><td colSpan = "2">{text}</td></tr>

}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistic = ({ text, value }) => <Display element="td" text={text} value={value} />



const Statistics = ({ all, average, positive }) => {
  if (all === 0) {
    return <Display element="tr" text="No feedback given"></Display>
  }
  return (
    <>
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={positive} />
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedback) => {
    if (feedback === "good") setGood(good + 1)
    if (feedback === "neutral") setNeutral(neutral + 1)
    if (feedback === "bad") setBad(bad + 1)
  }

  const rounder = (num) => (Math.round(num * 100)) / 100

  let all = (good + neutral + bad)
  let average = all !== 0 ? (rounder((good - bad) / all)) : 0
  let positive = good !== 0 ? (rounder(good / all * 100) + "%") : 0

  return (
    <div className="container">
      <Display element="h1" text="Give feedback" />
      <div>
        <Button onClick={() => handleClick("good")} text="Good" />
        <Button onClick={() => handleClick("neutral")} text="Neutral" />
        <Button onClick={() => handleClick("bad")} text="Bad" />
      </div>
      <Display element="h1" text="Statistics" />
      <table>
        <tbody>
          <Display element="td" text="Good" value={good} />
          <Display element="td" text="Neutral" value={neutral} />
          <Display element="td" text="Bad" value={bad} />

          <Statistics average={average} all={all} positive={positive} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)