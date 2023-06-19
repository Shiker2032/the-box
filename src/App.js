import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Rights from './components/Rights';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProjectPage from './pages/Project-page';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About page</div>} />
        <Route path='/projects' element={<div>Projects page</div>} />
        <Route path='/projects/:id' element={<ProjectPage/>} />

        <Route path='/services' element={<div>Services page</div>} />
        <Route path='/contact-us' element={<div>Contact us page</div>} />
      </Routes>
      <Footer />
      <Rights />
    </Router>
  );
}

export default App;
