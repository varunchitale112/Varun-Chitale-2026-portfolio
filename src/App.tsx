import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="bg-glow" />
      <Header />
      <main className="container mx-auto max-w-5xl px-6 py-12 md:py-20 relative z-10">
        <Hero />
        <div className="space-y-20 md:space-y-28">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Education />
          <Certifications />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;