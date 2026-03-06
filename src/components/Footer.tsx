import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 relative z-10">
      <div className="container mx-auto max-w-5xl px-6 py-12 text-center">
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold font-display tracking-tight text-slate-100">Let's Connect</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-slate-400 font-medium">
                <a href="mailto:varunchitale112@gmail.com" className="hover:text-cyan-400 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  varunchitale112@gmail.com
                </a>
                <a href="tel:+919561388306" className="hover:text-cyan-400 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  +91 9561388306
                </a>
            </div>
            <div className="flex gap-8 mt-4">
                <a href="https://github.com/varunchitale112" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/varun-chitale-1607ba218" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
                    LinkedIn
                </a>
            </div>
        </div>
        <p className="mt-12 text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Varun Chitale &middot; Built with precision and passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;