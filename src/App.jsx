import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const tabs = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    work: <Work />,
    contact: <Contact />,
  };

  return (
    <div className="app">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="content">
        {tabs[currentTab]}
      </main>
      <Footer />
    </div>
  );
}

export default App;
