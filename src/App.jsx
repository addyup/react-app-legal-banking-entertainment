import { useState } from 'react'
import addylogo from './assets/addyup.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="center-container">
  <div className="p-5 bg-light border rounded">
    <div className="moving-banner">
  <div className="banner-track">
    <h1 className="cool-text">
      Scroll Down for music links!
    </h1>
  </div>
</div>

  </div>

  <div className="p-5 bg-light border rounded">
    <img
      src={addylogo}
      alt="Centered"
      className="centered-image"
    />
  </div>

  <div>
    <table></table>
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
// 


export default App
