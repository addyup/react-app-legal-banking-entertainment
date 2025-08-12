import { useState } from 'react'

import addylogo from './assets/addyup.png'
import burningPsyDuck from './assets/imagesEllum/IMG_8613.JPG'
import sasuke from './assets/imagesEllum/IMG_8523.jpeg'
import saturn from './assets/imagesEllum/IMG_8504.JPG'
import ghostwars from './assets/imagesEllum/IMG_8497.JPG'
import cosmicneon from './assets/imagesEllum/IMG_8528.jpeg'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="center-container">


  <div className="p-5 bg-light border rounded">

  {/* Moving Banner */}
  <div className="moving-banner">
    <div className="banner-track">
      <h1 className="cool-text">Hip/Hop Dallas Music</h1>
    </div>
  </div>
</div>

{/* Image Banner Section */}
<div className="bg-light border-top border-bottom py-4">
  

<div className="d-flex flex-wrap justify-content-center align-items-center gap-3">

  {/* Main Logo */}
  <img
    src={addylogo}
    alt="Logo"
    className="img-fluid"
    style={{
      height: '150px',
      objectFit: 'contain',
      width: 'auto',
      maxWidth: '100%',
    }}
  />

  {/* 5 Banner Images */}
  {[burningPsyDuck, sasuke, saturn, ghostwars, cosmicneon].map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Image ${index + 1}`}
      className="img-fluid"
      style={{
        height: '150px',
        objectFit: 'cover',
        width: 'auto',
        maxWidth: '100%',
      }}
    />
  ))}

</div>


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

      <tr>
        <td>HighClassTrenchTalk3tkk</td>
        <td>GBK Marquis</td>
        <td><a href="https://www.youtube.com/watch?v=nnGCC1iOpgY" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>Next 2 me</td>
        <td>Oakcliff Selena [Prod. Lil Sonata Allegro]</td>
        <td><a href="https://youtu.be/UR6BQ40cdNc" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>Paint The Picture</td>
        <td>Dee Dot (feat. Soze Gth)</td>
        <td><a href="https://www.youtube.com/watch?v=uUnhu1arhRk" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>house of parties</td>
        <td>Lil Sonata [Official Music Vid]</td>
        <td><a href="https://www.youtube.com/watch?v=6-7vH8IHmwQ" target="_blank">Listen</a></td>
      </tr>

      <tr>
        <td>Love Me</td>
        <td>Ultra Bz</td>
        <td><a href="https://ffm.to/p0k6qga" target="_blank">Listen</a></td>
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
