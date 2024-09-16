import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/PostsList'
import map from 'react-dom'

function App() {

  return<>
  <div className="app">
    <h1>React on Rails blog</h1>
    <p> This is written in app.jsx in client/src/  </p>
    <PostsList />
      
  </div>


  </>
  
}

export default App
