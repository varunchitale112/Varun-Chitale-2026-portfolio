import React from 'react';
import Section from './Section';
import type { EducationItem } from '../types';

const educationData: EducationItem[] = [
  {
    degree: 'Professional Certification in AI & Data Science',
    institution: 'IIT Indore x Microsoft (Drishti CPS)',
    details: 'Ongoing professional certification focusing on advanced AI and Data Science concepts.',
    duration: 'Ongoing',
  },
  {
    degree: 'Bachelor of Engineering: Electronics and Telecommunication',
    institution: 'AISSMS Institute of Information Technology, Pune',
    details: 'Pune, India. Focused on core engineering principles with a specialization in AI/ML applications.',
    duration: 'June 2025',
  },
  {
    degree: 'HSC',
    institution: 'DR Kalmadi Shamrao Junior College, Pune',
    details: 'Physics, Chemistry, Maths and Computer Science',
    duration: 'Jul 2018 - Feb 2020',
  },
  {
    degree: 'SSC',
    institution: 'Bal Shikshan Mandir English Medium School, Pune',
    details: '',
    duration: 'Jun 2006 - Mar 2018',
  },
];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div key={index} className="p-6 glass-card">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2">
              <h3 className="text-xl font-bold text-slate-100">{item.degree}</h3>
              <time className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-white/5 w-fit">{item.duration}</time>
            </div>
            <p className="text-sm font-medium text-cyan-400/70 mb-3">{item.institution}</p>
            {item.details && <p className="text-slate-400 text-sm leading-relaxed">{item.details}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;