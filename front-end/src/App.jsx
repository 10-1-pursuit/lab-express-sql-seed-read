import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// PAGES
import Home from './Pages/Home';
import Index from "./Pages/Index";

function App() {
  return (
<Router>
    <div className="app">
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
</Routes>
    </div>
    </Router>
  );
}

export default App;
