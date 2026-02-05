import './App.css'

function App() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <h1>OpenShell</h1>
        <p>A modern, hackable desktop shell built in Java.</p>
      </section>

      {/* WHAT IT IS */}
      <section className="section">
        <h2>What is this?</h2>
        <p>
          OpenShell is a desktop terminal environment designed for learning,
          extensibility, and safety. It behaves like a real Unix shell while
          running inside a controlled UI.
        </p>
      </section>

      {/* STEPS */}
      <section className="section">
        <h2>Development Steps</h2>
        <ol className="steps">
          <li>Build core shell execution engine (parsing, execution, cwd)</li>
          <li>Implement built-in commands (cd, pwd, clear)</li>
          <li>Sandbox dangerous commands</li>
          <li>Design Swing-based terminal UI</li>
          <li>Add extensibility & plugin hooks</li>
          <li>Stabilize cross-platform behavior</li>
        </ol>
      </section>

      {/* PACKAGING */}
      <section className="section">
        <h2>Cross-Platform Packaging</h2>
        <ul>
          <li>Windows: native .exe installer</li>
          <li>macOS: signed .app bundle</li>
          <li>Linux: AppImage / deb</li>
        </ul>
        <p>
          Packaging will be handled using jpackage for native OS distribution.
        </p>
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
