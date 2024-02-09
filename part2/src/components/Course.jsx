const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => parts.map(part => <Part part={part} key={part.id}/>)

const Course = ({course}) => {
    
    const {name, parts} = course
    const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)

    return(
        <>
        <Header course={name}/>
        <Content parts={parts}/>
        <Total sum={total}/>
        </>
    )

}

export default Course