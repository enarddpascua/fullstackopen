import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length - 1).fill(0))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  
  const handleVotes = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  const maxVote = Math.max(...points)
  
  // maxAnecdote will get the index of the highest number in points array. However, if multiple points has the same point, it will show the first match/find.
  const maxAnecdote = anecdotes[points.indexOf(maxVote)]

  return (
    <div>
      <p>
        {anecdotes[selected]}
        <br/> <span>has {points[selected]} votes</span>
      </p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length - 1))}>next anecdote</button>
      <div>
        <h2>Anecdote with most votes</h2>
        {maxVote > 0 && <p>{maxAnecdote} <br/> has {maxVote} vote </p>}
      </div>
    </div>
  )
}

export default App