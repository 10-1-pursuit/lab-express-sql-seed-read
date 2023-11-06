import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Index from './pages/Index.jsx'
import New from './pages/New.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/songs' element={<Index />}/>
            <Route path='/songs/new' element={<New />}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
