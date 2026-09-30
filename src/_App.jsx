import './App.css'
import { useState } from 'react'

function Hello() {
  return <h1>Hello, world!</h1>
}

function Alert() {
  const handleClick = () => alert('test')
  const buttonName = 'Click Me'

  return <button className="my-button" onClick={handleClick}>
    {buttonName}
  </button>
}

function Counter() {
  const [counter, setCounter] = useState(0) // STATE, FUNCTION

  const increaseCounter = () => {
    // counter++ // this is imperative way of thinking, in react we use declarative:
    setCounter(counter + 1)
  }

  return (<div>
    <h2>{counter}</h2>
    <button onClick={increaseCounter}>Increase counter</button>
  </div>)
}

function App() {
  return (
    // react can't return more than one component, thus we need a wraper, which may be a <div> or a fragment <>
    <>
      <Hello />
      <Alert />
      <Counter />
    </>
  )
}

export default App