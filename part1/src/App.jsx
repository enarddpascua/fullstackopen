const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return <h1>{props.courseName}</h1>
  }

  const Part = (props) => {
    return <p>{props.content} {props.numOfExcercises}</p>
  }
  const Content = (props) => {
    return(
      <div>
        <Part content={part1} numOfExcercises={exercises1}/>
        <Part content={part2} numOfExcercises={exercises2}/>
        <Part content={part3} numOfExcercises={exercises3}/>
      </div>
    )
  }

  return (
    <div>
      <Header courseName={course}/>
      <Content/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App