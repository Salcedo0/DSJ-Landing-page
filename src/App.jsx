// App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;