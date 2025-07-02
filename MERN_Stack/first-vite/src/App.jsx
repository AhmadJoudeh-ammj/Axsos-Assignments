import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Dojo !</h1>
    <h2>Things i need to do:</h2>
    <ul>
      <li>Learn React</li>
      <li>Climb MT Everest</li>
      <li>Run a Marathon</li>
      <li>Feed the Dogs</li>
    </ul>
    
    </>
  )
}

export default App
