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
      Hip/Hop Dallas Music
    </h1>
  </div>
</div>

  </div>

  <div className="p-5 bg-light border rounded">
    <img
  src={addylogo}
  alt="Logo"
  className="img-fluid"
  style={{
    maxWidth: '400px',
    height: 'auto',
  }}
/>
  </div>

 <div className="table-responsive">

    
    
   

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
        <td>BBMWAA</td>
        <td>Addy Up</td>
        <td><a href="https://www.youtube.com/watch?v=4trU6CPaon4&list=RD4trU6CPaon4&start_radio=1" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>WYD</td>
        <td>Kuzo</td>
        <td><a href="https://youtu.be/MD4SyHciEDk" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>Outer Space</td>
        <td>Lil Sonata, Shida da Mac</td>
        <td><a href="https://youtu.be/I-HNbnHEEUc" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>armegadon</td>
        <td>Hollywood Z</td>
        <td><a href="https://www.youtube.com/watch?v=vSJdYMnvoMY" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>Still</td>
        <td>StopKrazy</td>
        <td><a href="https://youtu.be/oB1-dTFiXFU" target="_blank">Listen</a></td>
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
