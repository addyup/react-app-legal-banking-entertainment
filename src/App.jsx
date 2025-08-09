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

 <div className="p-5 bg-light border rounded">

    
    
   

<table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Blinding Lights</td>
        <td>The Weeknd</td>
        <td><a href="https://www.youtube.com/watch?v=4NRXx6U8ABQ&list=RD4NRXx6U8ABQ&start_radio=1" target="_blank">Listen</a></td>
      </tr>
      
    </tbody>
  </table>

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
