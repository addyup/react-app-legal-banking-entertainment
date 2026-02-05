import './App.css'

function App() {
  return (
    <div className="center-container">

    

      {/* HERO */}
      <section className="hero">
        <h1 className="cool-text">OpenShell</h1>
        <p className="subtitle">
          A modern, hackable desktop shell built in Java.
        </p>
      </section>

      {/* WHAT IT IS */}
      <section className="section static-banner">
        <h2 color='white'>What is this?</h2>
        <p>
          OpenShell is a desktop terminal environment designed for learning,
          extensibility, and safety. It behaves like a real Unix shell while
          running inside a controlled UI.
        </p>
      </section>

      {/* DEVELOPMENT STEPS */}
      <section className="section">
        <h2>Development Roadmap</h2>

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

      {/* PACKAGING */}
      <section className="section static-banner">
       <div color='white'> <h2>Cross-Platform Distribution</h2>
        <p>Packaged natively using <strong>jpackage</strong>:</p>
        <ul>
          <li>Windows → .exe installer</li>
          <li>macOS → signed .app bundle</li>
          <li>Linux → AppImage / deb</li>
        </ul>
        </div>
      </section>

      

      {/* CTA */}
      <section className="section cta">
        <p>Follow development and get early access.</p>
        <a href="#" className="button">View on GitHub</a>
      </section>

    </div>
  )
}

export default App
