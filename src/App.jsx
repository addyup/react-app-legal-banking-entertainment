import './App.css'

function App() {
  return (
    <div className="center-container">

    

      {/* DEVELOPMENT STEPS */}
      <section className="section">

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
<div>
  <a href="assets/downloads/RocketUI-ARM64.zip" class="download-btn" download>
    Download RocketUI (ARM64)
  </a>

  <p class="note">This version is for Apple Silicon Macs (ARM64) only.</p>
</div>
      
    </div>
  )
}

export default App
