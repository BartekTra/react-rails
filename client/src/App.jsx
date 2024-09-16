import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './components/AppRoutes'
import map from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <Router>
      <div className="app">
        <h1>React on Rails blog</h1>
        <NavBar />
        <AppRoutes />
        
      </div>
    </Router>


)
  
}

export default App
