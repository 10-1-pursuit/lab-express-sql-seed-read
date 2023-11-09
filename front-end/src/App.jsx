import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// PAGES
import Home from './Pages/Home';
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

// COMPONENTS
import '../src/Components/Background.css';

function App() {
  return (
<Router>
    <div className="app">
    <div className="background">
    <Navbar className="d-flex justify-content-between align-items-center" bg="warning">
  <Nav>
    <Nav.Link href="/songs">Songs</Nav.Link>
  </Nav>
  <Navbar.Brand className="text-center">Tuner App</Navbar.Brand>
  <Nav>
    <Nav.Link href="/songs/new">New Song</Nav.Link>
  </Nav>
</Navbar>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path="/songs" element={<Index />} />
  <Route path='/songs/:index' element={<Show />} />
  <Route path="/songs/:index/edit" element={<Edit />} />
</Routes>
</div>
    </div>
    </Router>
  );
}

export default App;
