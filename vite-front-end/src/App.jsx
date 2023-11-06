import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
