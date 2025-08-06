import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toggleSidebar } from './main.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
<link rel="stylesheet" href="App.css"></link>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
     


<div className="sidenav collapsed" id="sidebar">
    
  </div>
<button className="toggle-button" onClick={toggleSidebar} id="fontForCommon" style="color: #8eb1d4;">☰ Toggle</button>
<div className="concept">
  <i><span id="fontForCommon">Tech Crunch</span></i>
   <a href="https://uslegalpro.com/">
     <i><span id="fontForCommon"> Efiling</span></i>
    </a>
    <a href="https://www.betterhealth.vic.gov.au/health/healthyliving/alcohol">
      <i><span id="fontForCommon"> Article</span></i>
    </a>
    <a href="https://spectacularartistsoftexas.netlify.app/moregames.html">
      <i><span id="fontForCommon"> Music Notes</span></i>
    </a>

</div>

<div className="main-content">
  <div>
    <p>Hi</p>
  </div>
</div>
<script src='toggleSidebar.js'></script>
      </div>
    
  )
}

export default App
