import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import LoginPanel from './components/LoginPanel'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  // Set to false by default to show login panel first
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LoginPanel onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </div>
    </Router>
  )
}

export default App
