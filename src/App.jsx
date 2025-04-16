import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import LoginPanel from './components/LoginPanel'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <LoginPanel />
      </div>
    </Router>
  )
}

export default App
