import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{config.app.name}</h1>
      <p>Environment: {config.app.env}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="config-info">
        <h3>12-Factor Configuration</h3>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '20px auto' }}>
          <li>API URL: {config.api.url}</li>
          <li>API Timeout: {config.api.timeout}ms</li>
          <li>Analytics: {config.features.analytics ? 'Enabled' : 'Disabled'}</li>
          <li>Debug Mode: {config.features.debug ? 'Enabled' : 'Disabled'}</li>
        </ul>
      </div>
      <p className="read-the-docs">
        All config loaded from environment variables - see README.12factor.md
      </p>
    </>
  )
}

export default App
