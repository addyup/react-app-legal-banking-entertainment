import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

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


    <div>

</div>


    <div className="video-container">
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/At_3SHY3EqU"
    title="North Texas Underground (NTU) Paradise Summer Vol.1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


  <div style={{ display: 'flex', width: '100%' }}>
  {/* Left: Moving Banner */}
  <div style={{ width: '50%' }}>
    <div className="moving-banner">
      <div className="banner-track">
        <h1 className="cool-text">Hip/Hop Dallas Music</h1>
      </div>
    </div>
  </div>

  {/* Right: Videos Button */}
  <div
    style={{
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#001f1f',
      padding: '20px'
    }}
  >
    <a
      href="/#video-table"
      style={{
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#003f3f',
        borderRadius: '25px',
        color: '#00e6e6',
        fontWeight: 'bold',
        fontFamily: 'Orbitron, sans-serif',
        textDecoration: 'none',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#005050')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#003f3f')}
    >
      Videos
    </a>


  </div>
</div>



{/* Image Banner Section */}
<div className="bg-light border-top border-bottom py-4">
  
<div className="responsive-flex-container d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">

  {/* Main Logo */}
  <img
    src={addylogo}
    alt="Logo"
    className="img-fluid"
    style={{
      height: '150px',
      objectFit: 'contain',
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
        <td>Impatient</td>
        <td>Jeremih ft. Ty Dolla $ign</td>
        <td><a href="https://www.youtube.com/watch?v=EnIR91t4qgY&list=RDEnIR91t4qgY&start_radio=1" target="_blank">Listen</a></td>
      </tr>

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

      <tr>
        <td>North Texas Underground (NTU)</td>
        <td>Paradise Summer Vol.1 2025 Mix</td>
        <td><a href="https://www.youtube.com/watch?v=At_3SHY3EqU" target="_blank">Listen</a></td>
      </tr>
      
    </tbody>
  </table>



  </div>

  
<div className="table-responsive" id="video-table">
  <h1>Addys Playlist</h1>
<table>
    <thead>
      <tr>
        <th>Title</th>
        <th>By</th>
        <th>Video</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>I'm Not The Only One</td>
        <td>Sam Smith</td>
        <td><a href="https://www.youtube.com/watch?v=nCkpzqqog4k&list=RDnCkpzqqog4k&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Jelly Roll</td>
        <td>NEED A FAVOR</td>
        <td><a href="https://www.youtube.com/watch?v=P1nRboaLTzU&list=RDP1nRboaLTzU&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Lego House</td>
        <td>Ed Sheeran</td>
        <td><a href="https://www.youtube.com/watch?v=c4BLVznuWnU&list=RDc4BLVznuWnU&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Hey, Soul Sister</td>
        <td>Train</td>
        <td><a href="https://www.youtube.com/watch?v=kVpv8-5XWOI&list=RDkVpv8-5XWOI&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>house of parties</td>
        <td>Lil Sonata</td>
        <td><a href="https://www.youtube.com/watch?v=6-7vH8IHmwQ">Watch</a></td>
      </tr>

      <tr>
        <td>Chammak Challo</td>
        <td>Ra One | ShahRukh Khan | Kareena Kapoor</td>
        <td><a href="https://www.youtube.com/watch?v=oAVhUAaVCVQ&list=RDo1RducJbUdc&index=2">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td>Shaky</td>
        <td>Sanju Rathod Ft. Isha Malviya</td>
        <td><a href="https://www.youtube.com/watch?v=sUf2PtEZris&list=RDsUf2PtEZris&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td>Bartender</td>
        <td>T-Pain</td>
        <td><a href="https://www.youtube.com/watch?v=Lt2wjJlP2N4&list=RDsUf2PtEZris&index=2">Watch</a></td>
      </tr>

      <tr>
        <td>Despacito</td>
        <td>Luis Fonsi</td>
        <td><a href="https://www.youtube.com/watch?v=kJQP7kiw5Fk&list=RDsUf2PtEZris&index=4">Watch</a></td>
      </tr>

      <tr>
        <td>What Do You Mean?</td>
        <td>Justin Bieber</td>
        <td><a href="https://www.youtube.com/watch?v=DK_0jXPuIr0&list=RDDK_0jXPuIr0&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td>Apparently</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=eRaFMlZ1YHA&list=RDeRaFMlZ1YHA&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td className="neon-red">XO Tour Llif3</td>
        <td>Lil Uzi Vert</td>
        <td><a href="https://www.youtube.com/watch?v=WrsFXgQk5UI&list=RDeRaFMlZ1YHA&index=4">Watch</a></td>
      </tr>

      <tr>
        <td>TimeBomb</td>
        <td>by @illizem</td>
        <td><a href="https://www.youtube.com/watch?v=IoVw39MeEjc&list=RDIoVw39MeEjc&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td >$ave Dat Money</td>
        <td>Lil Dicky</td>
        <td><a href="https://www.youtube.com/watch?v=yvHYWD29ZNY&list=RDyvHYWD29ZNY&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Pretty Little Fears</td>
        <td>6LACK</td>
        <td><a href="https://www.youtube.com/watch?v=iSgUMPHQEWw&list=RDiSgUMPHQEWw&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Shape of You</td>
        <td>Ed Sheeran</td>
        <td><a href="https://www.youtube.com/watch?v=eJ5jwYjNc8s&list=RDsUf2PtEZris&index=14">Watch</a></td>
      </tr>

      <tr>
        <td>Psycho</td>
        <td>Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=au2n7VVGv_c&list=RDsUf2PtEZris&index=5">Watch</a></td>
      </tr>

      <tr>
        <td>Chameli Phoola</td>
        <td>Kuma Sagar</td>
        <td><a href="https://www.youtube.com/watch?v=bAInQtdFHlE&list=RDbAInQtdFHlE&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td>Lemonade</td>
        <td>Internet Money Don Toliver, Gunna & Nav</td>
        <td><a href="https://www.youtube.com/watch?v=0opZqh_TprM&list=RDMM&start_radio=1&rv=hT_nvWreIhg">Watch</a></td>
      </tr>

      <tr>
        <td>Nonsense</td>
        <td>Sabrina Carpenter</td>
        <td><a href="https://www.youtube.com/watch?v=YcSP1ZUf1eQ&list=RDMM&index=2">Watch</a></td>
      </tr>
      
      <tr>
        <td className="neon-red">Can't Get Enough</td>
        <td>J. Cole Ft. Trey Songz</td>
        <td><a href="https://www.youtube.com/watch?v=zI1eLwVuSeI&list=RDzI1eLwVuSeI&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Lost Ones</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=it-DvwBAkxw&list=RDzI1eLwVuSeI&index=2">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td>This Is What You Came For</td>
        <td>Calvin Harris, Rihanna</td>
        <td><a href="https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=RDkOkQ4T5WO9E&start_radio=1">Watch</a></td>
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
