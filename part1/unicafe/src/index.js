import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Display = ({ element, text }) => (element === "h1" ? <h1>{text}</h1> : <p>{text}</p>)

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedback) => {
    if (feedback === "good") setGood(good + 1)
    if (feedback === "neutral") setNeutral(neutral + 1)
    if (feedback === "bad") setBad(bad + 1)
  }

  const rounder = (num) => (Math.round(num * 100)) / 100

  let goodText = "Good " + good
  let neutralText = "Neutral " + neutral
  let badText = "Bad " + bad
  let total = (good + neutral + bad)
  let allText = "All " + total
  let averageText = total !== 0 ? ("Average " + rounder((good - bad) / total)) : ("Average " + 0)
  let positiveText = good !== 0 ? ("Positive " + rounder(good / total * 100) + "%") : ("Positive " + 0)

  return (
    <div className="container">
      <Display element="h1" text="Give feedback" />

      <Button onClick={() => handleClick("good")} text="Good" />
      <Button onClick={() => handleClick("neutral")} text="Neutral" />
      <Button onClick={() => handleClick("bad")} text="Bad" />

      <Display element="h1" text="Statistics" />
      <Display element="p" text={goodText} />
      <Display element="p" text={neutralText} />
      <Display element="p" text={badText} />
      <Display element="p" text={allText} />
      <Display element="p" text={averageText} />
      <Display element="p" text={positiveText} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)