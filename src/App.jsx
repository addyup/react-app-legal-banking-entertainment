import { useState } from 'react'
import addylogo from './assets/addyup.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="center-container">
      <img
        src={addylogo}
        alt="Centered"
        className="centered-image"
      />
    </div>
    
  )
}

export default App
