import './App.css';

function App() {
  return (
    <div className="center-container">

      {/* NAVBAR 
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#development">Development</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      */}

      <h1 className="section">
  Cool command prompt for 99 cents <span className="green-word">only</span>!
</h1>
<h1 className="section">
  For apple silicon <span className="green-word">only</span>
</h1>
<div className='section'>
  <h4 className='section'>Hit c then tab to autocomplete commands, (works on other commands!)</h4>
</div>



<div className="image-wrapper">
  <img src="assets/Screenshot 2026-02-11 at 5.19.08 PM.png" alt="RocketUI Screenshot" className="center-image" />
</div>
      {/* DEVELOPMENT STEPS */}
      <section className="section" id="development">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Core Engine</td>
                <td>Parsing, execution pipeline, working directory handling</td>
              </tr>
              <tr>
                <td>Built-ins</td>
                <td>cd, pwd, clear, help</td>
              </tr>
              <tr>
                <td className="neon-red">Sandboxing</td>
                <td>Block or virtualize dangerous commands (rm -rf, etc.)</td>
              </tr>
              <tr>
                <td>UI</td>
                <td>Swing-based terminal emulator</td>
              </tr>
              <tr>
                <td>Extensibility</td>
                <td>Plugin hooks & scripting support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="download">
        <div className="table-responsive">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="whatsDifferent">Auto Complete your commands.</div>
                  <p><strong>Step 1: Open the app if macOS shows a verification warning</strong></p>


<ol className="install-steps">
  <li>Download and open the RocketUI DMG.</li>
  <li>Drag RocketUI into the Applications folder.</li>
  <li>Try opening the app once (macOS may block it).</li>
  <li>Go to <b>System Settings → Privacy & Security</b>.</li>
  <li>Scroll down to the Security section and click <b>Open Anyway</b> next to RocketUI.</li>
  <li>Confirm <b>Open</b>.</li>
</ol>


                  <a
  href="https://buy.stripe.com/bJe00icLO56ybHY8s36Vq00"
  className="buy-button"
>
  Buy RocketUI – $0.99
</a>

                  <p className="note">This version is for Apple Silicon Macs (ARM64) only. (Later will be available for windows and linux so please support!)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
<h2>Support : mailandmore.cbe@gmail.com</h2>
    </div>
  );
}

export default App;