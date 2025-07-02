import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'
function App() {

  return (
    <>
      <PersonCard firstname="Jane" lastname="Doe" age={45} haircolor="Black" />
      <PersonCard firstname="John" lastname="Smith" age={88} haircolor="Brown" />
      <PersonCard firstname="Millard" lastname="Fillmore" age={50} haircolor="Brown" />
      <PersonCard firstname="Maria" lastname="Smith" age={62} haircolor="Brown" />

    </>
  )
}

export default App;
