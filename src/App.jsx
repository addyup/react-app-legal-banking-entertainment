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

    
  <h1>Feel like freestyling?</h1> 
  
   <table>
    <thead>
      <tr>
        <th>Beat</th>
        <th>Song/Artists</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>Show Me (Instrumental)</td>
        <td>Kid Ink Ft. Chris Brown </td>
        <td><a href="https://www.youtube.com/watch?v=5aoejNybQJo&list=RD5aoejNybQJo&start_radio=1" target="_blank">Freestyle Go!</a></td>
      </tr>

      <tr>
        <td>New-Flame (Instrumental)</td>
        <td>Chris-Brown Ft.Usher Rick Ross</td>
        <td><a href="https://www.youtube.com/watch?v=4MlvzvJkE7E&list=RD4MlvzvJkE7E&start_radio=1" target="_blank">Freestyle Go!</a></td>
      </tr>

    <tr>
        <td>Dollar And A Dream III (Instrumental)</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=iV0zLUOhMHw&list=RDiV0zLUOhMHw&start_radio=1" target="_blank">Freestyle Go!</a></td>
      </tr>
      
      
    </tbody>
  </table>
   

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
        <td>Udaayo Mann</td>
        <td>BEHULI from MEGHAULI</td>
        <td><a href="https://www.youtube.com/watch?v=OwLvKrenonw&list=RDZLU4rx24024&index=15">Watch</a></td>
      </tr>

      <tr>
        <td>Aila Luwaya</td>
        <td>Rojman</td>
        <td><a href="https://www.youtube.com/watch?v=BgLcbFwZ8JU&list=RDZLU4rx24024&index=6">Watch</a></td>
      </tr>

      <tr>
        <td>MAYA BIRANI</td>
        <td>Mahesh Kafle ft. Melina Rai | Najir Husen | Aanchal Sharma</td>
        <td><a href="https://www.youtube.com/watch?v=-kVUygjWVG4&list=RD-kVUygjWVG4&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Baacha Bhayo</td>
        <td>Swoopna & Jyotsna</td>
        <td><a href="https://www.youtube.com/watch?v=2BH9Fok3EX8&list=RD2BH9Fok3EX8&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Furfuri</td>
        <td>Kumari Janani</td>
        <td><a href="https://www.youtube.com/watch?v=sCQDGs7W6mE&list=RDsCQDGs7W6mE&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Teach Me How To Dougie</td>
        <td>Cali Swag District</td>
        <td><a href="https://www.youtube.com/watch?v=PIHtUxnRN0c&list=RDPIHtUxnRN0c&start_radio=1">Watch</a></td>
      </tr>

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
        <td>Bardali</td>
        <td>Sushant KC</td>
        <td><a href="https://www.youtube.com/watch?v=HAcLoqZO-Z0&list=RDZLU4rx24024&index=2">Watch</a></td>
      </tr>

      <tr>
        <td>JHIM JHIM</td>
        <td>Neha Kakkar & Ekdev Limbu</td>
        <td><a href="https://www.youtube.com/watch?v=ZLU4rx24024&list=RDZLU4rx24024&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>O jaane Jaan</td>
        <td>Atif Aslam</td>
        <td><a href="https://www.youtube.com/watch?v=UQ0GfRyKrLQ&list=RDUQ0GfRyKrLQ&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Chameli Phoola</td>
        <td>Kuma Sagar And The Khwopa</td>
        <td><a href="https://www.youtube.com/watch?v=OsvcJE_S01Y&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&start_radio=1&rv=QC0fr438Z30">Watch</a></td>
      </tr>

      <tr>
        <td>Contra</td>
        <td>Logic</td>
        <td><a href="https://www.youtube.com/watch?v=1KwN3s7JZZo&list=RD1KwN3s7JZZo&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Saint-Tropez</td>
        <td>Post Malone Saint-Tropez</td>
        <td><a href="https://www.youtube.com/watch?v=MRyLC2M1K2w&list=RDMRyLC2M1K2w&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>No Brainer</td>
        <td>DJ Khaled (Official Video) ft. Justin Bieber, Chance the Rapper, Quavo</td>
        <td><a href="https://www.youtube.com/watch?v=kxloC1MKTpg&list=RDkxloC1MKTpg&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Tommy Lee</td>
        <td>Tyla Yaweh ft. Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=nEmehcK7KfQ&list=RDnEmehcK7KfQ&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Classic Man</td>
        <td>Jidenna (Remix) ft. Kendrick Lamar</td>
        <td><a href="https://www.youtube.com/watch?v=URiDdlAS6ls&list=RDURiDdlAS6ls&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Joy</td>
        <td>Wiz Khalifa ft. Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=UHRD0aeaDz4&list=RDUHRD0aeaDz4&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Cooler Than Me</td>
        <td>Mike Posner</td>
        <td><a href="https://www.youtube.com/watch?v=mqWq_48LxWQ&list=RDmqWq_48LxWQ&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Like A G6</td>
        <td>Far East Movement</td>
        <td><a href="https://www.youtube.com/watch?v=w4s6H4ku6ZY&list=RDw4s6H4ku6ZY&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Down The Drain</td>
        <td>Addy Up</td>
        <td><a href="https://www.youtube.com/watch?v=q-UasRfCWWw&list=RDq-UasRfCWWw&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>A Thousand Miles</td>
        <td>Vanessa Carlton</td>
        <td><a href="https://www.youtube.com/watch?v=Cwkej79U3ek&list=RDCwkej79U3ek&start_radio=1">Watch</a></td>
      </tr>
      
      <tr>
        <td>Project Dreams</td>
        <td>Marshmello x Roddy Ricch</td>
        <td><a href="https://www.youtube.com/watch?v=Hn7WDtF3nKA&list=RDHn7WDtF3nKA&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>a lot</td>
        <td>21 Savage ft. J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=DmWWqogr_r8&list=RDlH0Pku7-oe4&index=2">Watch</a></td>
      </tr>

      <tr>
        <td>You May Enter</td>
        <td>Addy Up</td>
        <td><a href="https://www.youtube.com/watch?v=lH0Pku7-oe4&list=RDlH0Pku7-oe4&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Golden Touch of Jagjit Singh</td>
        <td>Longer Playlist</td>
        <td><a href="https://www.youtube.com/watch?v=vz2OlQ5XY6E&list=RDvz2OlQ5XY6E&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Ice On My Baby</td>
        <td>Yung Bleu ft. Kevin Gates</td>
        <td><a href="https://www.youtube.com/watch?v=4BijeKQ1MxA&list=RDlwk5OUII9Vc&index=17">Watch</a></td>
      </tr>

      <tr>
        <td>Contra</td>
        <td>Logic</td>
        <td><a href="https://www.youtube.com/watch?v=1KwN3s7JZZo&list=RDlwk5OUII9Vc&index=18">Watch</a></td>
      </tr>

      <tr>
        <td>TEAR$</td>
        <td>Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=vz2OlQ5XY6E&list=RDvz2OlQ5XY6E&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Ayo</td>
        <td>Chris Brown, Tyga</td>
        <td><a href="https://www.youtube.com/watch?v=zKCrSN9oXgQ&list=RDzKCrSN9oXgQ&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>What's Up</td>
        <td>Post Malone Feat. 1st</td>
        <td><a href="https://www.youtube.com/watch?v=6fHyVkdgVw8&list=RD6fHyVkdgVw8&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Too Young</td>
        <td>Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=gfGiCjzz8TE">Watch</a></td>
      </tr>

      <tr>
        <td>Star Shopping</td>
        <td>Lil Peep</td>
        <td><a href="https://www.youtube.com/watch?v=UBMuucEmfkg&list=RDUBMuucEmfkg&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Count Me Out</td>
        <td>Kendrick Lamar</td>
        <td><a href="https://www.youtube.com/watch?v=W5hSdGt2M8w&list=RDwvFDXV0VBg4&index=5">Watch</a></td>
      </tr>

      <tr>
        <td>False Prophets</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=wvFDXV0VBg4&list=RDwvFDXV0VBg4&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>With You</td>
        <td>Chris Brown</td>
        <td><a href="https://www.youtube.com/watch?v=nmjdaBaZe8Y&list=RDnmjdaBaZe8Y&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Love You Like A Love Song</td>
        <td>Selena Gomez & The Scene</td>
        <td><a href="https://www.youtube.com/watch?v=EgT_us6AsDg&list=RDvGPG91x5eMY&index=3">Watch</a></td>
      </tr>

      <tr>
        <td>Miss Me</td>
        <td>Chris Brown ft. Tyga, Kevin McCall</td>
        <td><a href="https://www.youtube.com/watch?v=9RUSRxTpI80&list=RD9RUSRxTpI80&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Deuces</td>
        <td>Drake ft. Lil Wayne</td>
        <td><a href="https://www.youtube.com/watch?v=TRLSQDCkcaA&list=RDTRLSQDCkcaA&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Pyramid</td>
        <td>Charice</td>
        <td><a href="https://www.youtube.com/watch?v=vGPG91x5eMY&list=RDvGPG91x5eMY&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>EvenThoughI (on my way down)</td>
        <td>Addy Up</td>
        <td><a href="https://www.youtube.com/watch?v=iaJ1rh6OKx0&list=OLAK5uy_nXWOWJe5XXuPRyjf9ofsDJAXcWPSyx0dk">Watch</a></td>
      </tr>

      <tr>
        <td>Circles</td>
        <td>Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=wXhTHyIgQ_U&list=RDwXhTHyIgQ_U&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Love The Way You Lie</td>
        <td>Eminem</td>
        <td><a href="https://www.youtube.com/watch?v=uelHwf8o7_U&list=RDuelHwf8o7_U&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Better</td>
        <td>Khalid</td>
        <td><a href="https://www.youtube.com/watch?v=x3bfa3DZ8JM&list=RDx3bfa3DZ8JM&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Koi Mil Gaya</td>
        <td>Udit Narayan | K.S. Chitra</td>
        <td><a href="https://www.youtube.com/watch?v=Foh01tG09Nk&list=RDFoh01tG09Nk&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Replay (Prequel) [Music Video] </td>
        <td>Iyaz</td>
        <td><a href="https://www.youtube.com/watch?v=WXxV9g7lsFE&list=RDWXxV9g7lsFE&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Cruise</td>
        <td>Florida Georgia Line</td>
        <td><a href="https://www.youtube.com/watch?v=8PvebsWcpto&list=RD8PvebsWcpto&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>When It Rains It Pours (Official Video)</td>
        <td>Luke Combs</td>
        <td><a href="https://www.youtube.com/watch?v=uXyxFMbqKYA&list=RDuXyxFMbqKYA&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Sunflower (Live From The Studio)</td>
        <td>Post Malone, Swae Lee</td>
        <td><a href="https://www.youtube.com/watch?v=Lk0sZwXTwnc">Watch</a></td>
      </tr>

      <tr>
        <td>Dream By Dream</td>
        <td>Sneaky Little Devil</td>
        <td><a href="https://www.youtube.com/watch?v=TpZUfsV_klk&list=RDGMEMYH9CUrFO7CfLJpaD7UR85w&start_radio=1&rv=wPah_tGMkVc">Watch</a></td>
      </tr>

      <tr>
        <td>Koi Mil Gaya</td>
        <td>Udit Narayan | K.S. Chitra</td>
        <td><a href="https://www.youtube.com/watch?v=Foh01tG09Nk&list=RDFoh01tG09Nk&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>oui</td>
        <td>Jeremih</td>
        <td><a href="https://www.youtube.com/watch?v=cstIR7VI7Ak&list=RDGMEMP-96bLtob-xyvCobnxVfyw&start_radio=1&rv=nmjdaBaZe8Y">Watch</a></td>
      </tr>

      <tr>
        <td>Umbrella</td>
        <td>Rihanna ft. JAY-Z</td>
        <td><a href="https://www.youtube.com/watch?v=CvBfHwUxHIk&list=RDCvBfHwUxHIk&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Rolex</td>
        <td>Ayo & Teo</td>
        <td><a href="https://www.youtube.com/watch?v=lwk5OUII9Vc&list=RDlwk5OUII9Vc&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Hopeless Romantic</td>
        <td>Wiz Khalifa</td>
        <td><a href="https://www.youtube.com/watch?v=9VH0fUABBjY&list=RD9VH0fUABBjY&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Blueberry Faygo</td>
        <td>Lil Mosey</td>
        <td><a href="https://www.youtube.com/watch?v=V_jHc_n0p9c&list=RDV_jHc_n0p9c&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Lucid Dreams</td>
        <td>Juice WRLD</td>
        <td><a href="https://www.youtube.com/watch?v=mzB1VGEGcSU&list=RDmzB1VGEGcSU&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>The Story of O.J.</td>
        <td>JAY-Z</td>
        <td><a href="https://www.youtube.com/watch?v=RM7lw0Ovzq0&list=RDRM7lw0Ovzq0&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Over</td>
        <td>Drake</td>
        <td><a href="https://www.youtube.com/watch?v=2lTB1pIg1y0&list=RD2lTB1pIg1y0&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Just A Dream</td>
        <td>Nelly</td>
        <td><a href="https://www.youtube.com/watch?v=N6O2ncUKvlg&list=RDCHVhwcOg6y8&index=5">Watch</a></td>
      </tr>

      <tr>
        <td>SICKO MODE</td>
        <td>Travis Scott</td>
        <td><a href="https://www.youtube.com/watch?v=6ONRf7h3Mdk&list=RDoQa8Rv-Vq-Y&index=10">Watch</a></td>
      </tr>

      <tr>
        <td>Been On</td>
        <td>G-Eazy</td>
        <td><a href="https://www.youtube.com/watch?v=oQa8Rv-Vq-Y&list=RDoQa8Rv-Vq-Y&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Every Season</td>
        <td>Roddy Ricch</td>
        <td><a href="https://www.youtube.com/watch?v=jd-VdQNRUHs&list=RD0opZqh_TprM&index=5">Watch</a></td>
      </tr>

      <tr>
        <td>Habits</td>
        <td>Tove Lo</td>
        <td><a href="https://www.youtube.com/watch?v=oh2LWWORoiM&list=RD2vjPBrBU-TM&index=2">Watch</a></td>
      </tr>

      <tr>
        <td>Really Really</td>
        <td>Kevin Gates</td>
        <td><a href="https://www.youtube.com/watch?v=pR0VsbyZxWg&list=RDpR0VsbyZxWg&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>About The Money</td>
        <td>T.I. ft Young Thug</td>
        <td><a href="https://www.youtube.com/watch?v=pR0VsbyZxWg&list=RDpR0VsbyZxWg&start_radio=1">Watch</a></td>
      </tr>


      <tr>
        <td>I'm Not The Only One</td>
        <td>DJ Khaled</td>
        <td><a href="https://www.youtube.com/watch?v=weeI1G46q0o&list=RDbUjPPBxbQrQ&index=7">Watch</a></td>
      </tr>

      <tr>
        <td>I'm The One</td>
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

      <tr className="neon-red">
        <td >XO Tour Llif3</td>
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
      
      <tr className="neon-red">
        <td >Can't Get Enough</td>
        <td>J. Cole Ft. Trey Songz</td>
        <td><a href="https://www.youtube.com/watch?v=zI1eLwVuSeI&list=RDzI1eLwVuSeI&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Lost Ones</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=it-DvwBAkxw&list=RDzI1eLwVuSeI&index=2">Watch</a></td>
      </tr>

      <tr>
        <td>All I Do</td>
        <td>Logic</td>
        <td><a href="https://www.youtube.com/watch?v=eIGh4Nc1fAM&list=RDeIGh4Nc1fAM&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>PRBLMS</td>
        <td className="neon-red">6LACK</td>
        <td><a href="https://www.youtube.com/watch?v=fS9m0Ac8PCU&list=RDfS9m0Ac8PCU&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td >All In My Head</td>
        <td>BKAYE</td>
        <td><a href="https://www.youtube.com/watch?v=nwDhSPFPPeo&list=RDnwDhSPFPPeo&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td >changes</td>
        <td>XXXTENTACION</td>
        <td><a href="https://www.youtube.com/watch?v=f0bbDFRYD_A&list=RDf0bbDFRYD_A&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td >Midtown</td>
        <td>DUKI</td>
        <td><a href="https://www.youtube.com/watch?v=rSEd7vZo6Lk&list=RDrSEd7vZo6Lk&start_radio=1">Watch</a></td>
      </tr>

      <tr className="neon-red">
        <td>This Is What You Came For</td>
        <td>Calvin Harris, Rihanna</td>
        <td><a href="https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=RDkOkQ4T5WO9E&start_radio=1">Watch</a></td>
        {/* <td><iframe src="https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=RDkOkQ4T5WO9E&start_radio=1" frameborder="0"></iframe></td> */}
      </tr>

      <tr>
        <td>Last Night</td>
        <td>Morgan Wallen</td>
        <td><a href="https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=RDkOkQ4T5WO9E&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>Party In The U.S.A.</td>
        <td>Miley Cyrus</td>
        <td><a href="https://www.youtube.com/watch?v=M11SvDtPBhA&list=RDbUjPPBxbQrQ&index=6">Watch</a></td>
      </tr>

      <tr>
        <td>Under The Sun</td>
        <td>Dreamville</td>
        <td><a href="https://www.youtube.com/watch?v=eUUuI--jAlM&list=RDeUUuI--jAlM&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>T-Shirt</td>
        <td>Migos</td>
        <td><a href="https://www.youtube.com/watch?v=1VUa99-tJqs&list=RD1VUa99-tJqs&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>GNAT</td>
        <td>Eminem</td>
        <td><a href="https://www.youtube.com/watch?v=EosMazKaPbU&list=RDeUUuI--jAlM&index=8">Watch</a></td>
      </tr>

      <tr>
        <td>Everybody Dies</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=-5slZHLSnow&list=RDeUUuI--jAlM&index=11">Watch</a></td>
      </tr>
      
      <tr>
        <td className="neon-red">Sideline Story</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=_h82Y-9GMJ8&list=RDeUUuI--jAlM&index=12">Watch</a></td>
      </tr>


      <tr>
        <td className="neon-red">Count Me Out</td>
        <td>Kendrick Lamar</td>
        <td><a href="https://www.youtube.com/watch?v=5GhhVHpPR_M&list=RDeUUuI--jAlM&index=14">Watch</a></td>
      </tr>

      <tr>
        <td>Godzilla</td>
        <td>Eminem</td>
        <td><a href="https://www.youtube.com/watch?v=r_0JjYUe5jo&list=RDeUUuI--jAlM&index=20">Watch</a></td>
      </tr>

      <tr>
        <td>ZEZE</td>
        <td>Kodak Black</td>
        <td><a href="https://www.youtube.com/watch?v=EfHNIPXTxy0&list=RDeUUuI--jAlM&index=23">Watch</a></td>
      </tr>

      <tr>
        <td>False Prophets</td>
        <td>J. Cole</td>
        <td><a href="https://www.youtube.com/watch?v=wvFDXV0VBg4&list=RDeUUuI--jAlM&index=32">Watch</a></td>
      </tr>

      <tr>
        <td>Panda</td>
        <td>Desiigner</td>
        <td><a href="https://www.youtube.com/watch?v=E5ONTXHS2mM&list=RDeUUuI--jAlM&index=28">Watch</a></td>
      </tr>

      <tr>
        <td>Ballin’</td>
        <td>Mustard Roddy</td>
        <td><a href="https://www.youtube.com/watch?v=YS0h2-hy9rw&list=RDeUUuI--jAlM&index=29">Watch</a></td>
      </tr>

      <tr>
        <td>Aquarius III</td>
        <td>Logic</td>
        <td><a href="https://www.youtube.com/watch?v=gfcBswn2nH8&list=RDeUUuI--jAlM&index=27">Watch</a></td>
      </tr>

      <tr>
        <td>Headlines</td>
        <td>Drake</td>
        <td><a href="https://www.youtube.com/watch?v=cimoNqiulUE&list=RDeUUuI--jAlM&index=27">Watch</a></td>
      </tr>

      <tr>
        <td>KYLE</td>
        <td>iSpy feat. Lil Yachty</td>
        <td><a href="https://www.youtube.com/watch?v=5XK4v2fgMPU&list=RDeUUuI--jAlM&index=28">Watch</a></td>
      </tr>

      <tr>
        <td>Unforgettable ft. Swae Lee</td>
        <td>French Montana</td>
        <td><a href="https://www.youtube.com/watch?v=5XK4v2fgMPU&list=RDeUUuI--jAlM&index=28">Watch</a></td>
      </tr>

      <tr>
        <td>Sativa t. Rae Sremmurd</td>
        <td>Jhené Aiko</td>
        <td><a href="https://www.youtube.com/watch?v=5x-d3pabd5o&list=RDeUUuI--jAlM&index=28">Watch</a></td>
      </tr>

      <tr>
        <td>Faucet Failure</td>
        <td>Ski Mask The Slump God</td>
        <td><a href="https://www.youtube.com/watch?v=tbhxSeaiMiU&list=RDeUUuI--jAlM&index=28">Watch</a></td>
      </tr>

      <tr>
        <td>Catch Me Outside (Official Music Video)</td>
        <td>Ski Mask The Slump God</td>
        <td><a href="https://www.youtube.com/watch?v=JpIlnaAmiCg&list=RDJpIlnaAmiCg&start_radio=1">Watch</a></td>
      </tr>

      <tr>
        <td>I Had Some Help</td>
        <td>Post Malone</td>
        <td><a href="https://www.youtube.com/watch?v=4QIZE708gJ4&list=RDbUjPPBxbQrQ&index=3">Watch</a></td>
      </tr>

      <tr>
        <td>luther</td>
        <td>Kendrick Lamar & SZA</td>
        <td><a href="https://www.youtube.com/watch?v=sNY_2TEmzho&list=RDbUjPPBxbQrQ&index=4">Watch</a></td>
      </tr>

      <tr>
        <td>luther</td>
        <td>Kendrick Lamar & SZA</td>
        <td><a href="https://www.youtube.com/watch?v=sNY_2TEmzho&list=RDbUjPPBxbQrQ&index=4">Watch</a></td>
      </tr>

      <tr>
        <td>Chandelier</td>
        <td>Sia</td>
        <td><a href="https://www.youtube.com/watch?v=2vjPBrBU-TM&list=RD2vjPBrBU-TM&start_radio=1">Watch</a></td>
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
