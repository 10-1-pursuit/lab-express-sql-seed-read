import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Index from './pages/Index.jsx'
import New from './pages/New.jsx'
import Show from './pages/Show.jsx'
import Edit from './pages/Edit.jsx'
import FourOFour from './pages/FourOFour.jsx'
import './App.css'
import Artists from './components/Artists.jsx'
import ArtistsSongs from './components/ArtistsSongs.jsx'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/songs' element={<Index />}/>
            <Route path='/artists' element={<Artists />}/>
            <Route path='/artists/:id/songs' element={<ArtistsSongs />} />
            <Route path='/songs/new' element={<New />}/>
            <Route path='/songs/:id' element={<Show />}/>
            <Route path='/songs/:id/edit' element={<Edit />}/>
            <Route path='*' element={<FourOFour />}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
