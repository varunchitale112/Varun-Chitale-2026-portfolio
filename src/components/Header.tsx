import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#education', label: 'Education' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto max-w-5xl px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white font-display tracking-tighter group">
            V<span className="text-cyan-400 group-hover:text-white transition-colors">C</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 text-sm font-bold uppercase tracking-widest transition-all hover:text-cyan-400 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="/resume.pdf" 
              download="Varun_Chitale_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all text-xs font-bold uppercase tracking-widest"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Panel */}
        {isMenuOpen && (
           <div className="md:hidden" id="mobile-menu">
             <ul className="pt-4 pb-2 space-y-2">
               {navLinks.map((link) => (
                 <li key={link.href}>
                   <a
                     href={link.href}
                     onClick={(e) => handleNavClick(e, link.href)}
                     className="block px-3 py-2 rounded-md text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
             <div className="px-3 py-4 border-t border-white/5">
                <a
                  href="/resume.pdf"
                  download="Varun_Chitale_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase tracking-widest text-sm"
                >
                  <FileText className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
           </div>
        )}
      </nav>
    </header>
  );
};

export default Header;