import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const Title = ({ title }) => <h2>{title}</h2>

const Display = ({ text }) => <p>{text}</p>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Buttons = ({ getAnecdote, vote }) => {
  return (
    <div>
      <Button onClick={vote} text="Vote" />
      <Button onClick={getAnecdote} text="Next" />
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const array = new Array(anecdotes.length).fill(0)
  const [points, setPoints] = useState(array)

  const getAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  
  const votes = "Has " + points[selected] + " votes"
  const mostVotes = Math.max(...points)
  const index = points.indexOf(mostVotes)
  const mostVotesText = "Has " + mostVotes + " votes"

  return (
    <div className="container">
      <Title title="Anecdote of the day" />
      <Display text={props.anecdotes[selected]} />
      <Display text={votes} />
      <Buttons getAnecdote={getAnecdote} vote={vote} />
      <Title title="Anecdote with most votes" />
      <Display text={anecdotes[index]} />
      <Display text={mostVotesText}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)