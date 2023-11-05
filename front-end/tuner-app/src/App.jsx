import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from './Pages/Index';


function App() {


  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/songs" element={<Index/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
