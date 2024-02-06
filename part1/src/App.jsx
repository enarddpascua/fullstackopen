import { useState } from 'react'

const Statistics = ({bad, neutral, good}) => {
  const total = bad + neutral + good;
  const avg = total / 3;
  const positive = (good/total) * 100;
  return(
    <>
      <h2>Statistics</h2>
      {total > 0 ? (
      <table>
        <tbody>
          <tr>
              <StatisticsLine text={"Bad"} value={bad}/>
          </tr>
          <tr>
              <StatisticsLine text={"Neutral"} value={neutral}/>
          </tr>
          <tr>
              <StatisticsLine text={"Good"} value={good}/>
          </tr>
          <tr>
              <StatisticsLine text={"All"} value={total}/>
          </tr>
          <tr>
              <StatisticsLine text={"Average"} value={avg.toFixed(2)}/>
          </tr>
          <tr>
              <StatisticsLine text={"Positive"} value={positive.toFixed(2)}/>
          </tr>
        </tbody>
      </table>
      ): <h2>No Feedback given</h2>}
    </>

  )
}

const StatisticsLine = ({text,value=0}) => {
return(
  <>
    <td>{text}</td> 
    <td>
      {value} {text == "Positive" && "%"}
    </td>
  </>
)}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback!</h1>
      <div>
        <button onClick={() => setBad(b => b+1)}>Bad</button>
        <button onClick={() => setNeutral(n => n+1)}>Neutral</button>
        <button onClick={() => setGood(g => g+1)}>Good</button>
      </div>
      <Statistics bad={bad} neutral={neutral} good={good}/>
    </div>
  )
}

export default App