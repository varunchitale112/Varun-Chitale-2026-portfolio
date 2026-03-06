
import React from 'react';
import { Download } from 'lucide-react';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.91 0-1.38.61-1.38 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.93 3.28 4.3v4.84z" />
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 mb-20 md:mb-28">
      <div className="text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-widest uppercase hero-item" style={{ animationDelay: '0.1s' }}>
          Available for opportunities
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-slate-100 tracking-tighter font-display hero-item" style={{ animationDelay: '0.2s' }}>
          Varun <span className="text-gradient">Chitale</span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-medium text-slate-300 tracking-tight font-display hero-item" style={{ animationDelay: '0.4s' }}>
          AI/ML-fullstack software engineer
        </h2>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto leading-relaxed hero-item" style={{ animationDelay: '0.6s' }}>
          Passionate engineer specializing in <span className="text-slate-200">AI, Machine Learning</span>, and <span className="text-slate-200">Full-Stack development</span>. Experienced in building scalable applications with Python, Java, and modern web frameworks.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6 hero-item" style={{ animationDelay: '0.8s' }}>
          <a href="https://github.com/varunchitale112" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:scale-110">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/varun-chitale-1607ba218" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:scale-110">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon />
          </a>
          <a 
            href="/resume.pdf" 
            download="Varun_Chitale_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105 font-medium"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;