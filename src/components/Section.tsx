
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`scroll-mt-20 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-slate-950/80 px-6 py-5 backdrop-blur-xl border-b border-white/5 md:sr-only">
         <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{title}</h2>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-x-12">
        <h2 className="hidden md:block col-span-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-1 sticky top-32 h-fit">
          {title}
        </h2>
        <div className="col-span-3">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;