import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="App">
      <div className="terminal-bg"></div>
      <div className="terminal-grid"></div>
      <div className="terminal-scanlines"></div>
      <div className="terminal-vignette"></div>
      <div className="terminal-glow"></div>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
