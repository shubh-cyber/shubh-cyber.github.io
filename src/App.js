import './App.css';
import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/projects" element={ <Projects/>} />
        <Route path="/experience" element={ <Experience/>} />
        {/* <Route path="/contact" element={ <Contact/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
