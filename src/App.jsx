import { useState } from 'react'
import addylogo from './assets/addyup.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="center-container">
<div className="p-5 bg-light border rounded">
    <h1 className='cool-text'>
      Commission Based service providers.
    </h1>
  </div>
        
      <div className="p-5 bg-light border rounded">
    <img
        src={addylogo}
        alt="Centered"
        className="centered-image"
      />
  </div>

      

       
     
  </div>

      

    </div>


    

   
    
  )
}
// so the pics can be imported and dynamically loaded
// the best way to write code is first create a project using
// npm create npx create-react-app my-app
// it will load
// format is .jsx
// npm run dev


export default App
