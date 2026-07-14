import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;