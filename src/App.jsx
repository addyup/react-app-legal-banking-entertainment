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

      <h1 className="section">Cool command prompt for 99 cents only!</h1>
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
                  <p>Step 1 Bypass Gatekeeper</p>
                  <a href="assets/RocketUI-1.0.dmg" download>
                    Download RocketUI (ARM64)
                  </a>
                  <p className="note">This version is for Apple Silicon Macs (ARM64) only.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

export default App;