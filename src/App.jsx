import { useState } from 'react'
import reactLogo from './assets/react.svg'
import addylogo from './assets/addyup.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="center-container">
  <img
    src="addylogo"
    alt="Centered"
    className="centered-image"
  />
</div>
    
  )
}

export default App
