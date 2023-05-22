import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components//utils/Navigation';
import Rights from './components//utils/Rights';
import Home from './pages/Home';
import Footer from './components/utils/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About page</div>} />
        <Route path="/projects" element={<div>Projects page</div>} />
        <Route path='/services' element={<div>Services page</div>} />
        <Route path='/contact-us' element={<div>Contact us page</div>} />
      </Routes>
      <Footer />
      <Rights />
    </Router>
  );
}

export default App;
