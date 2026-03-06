
import React from 'react';
import Section from './Section';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    role: 'Associate Data Scientist',
    company: 'Quamin Tech Solutions LLP',
    location: 'Bangalore',
    duration: 'Jul 2025 - Present',
    description: [
        'Developed AI-based cybersecurity application with full-stack implementation, including frontend (HTML5, CSS3, React.js), backend APIs (RESTful, Node.js/Express), and AI/ML integration using Python/Django.',
        'Implemented Prompt Injection Detection, Hallucination Detection, Bias Detection & Fairness, and Compliance Monitoring using OOP principles and Agile methodology.',
        'Optimized SQL Server/PostgreSQL queries and Docker containers for scalable deployment and performance.',
    ],
  },
  {
    role: 'AI/ML Engineering Intern',
    company: 'Quamin Tech Solutions LLP',
    location: 'Bangalore',
    duration: 'Apr 2025 - Jun 2025',
    description: [
        'Built AgriCare 1.0 full-stack web app using React.js frontend (ES6+, responsive design), MySQL backend, and Python ML models with Flask APIs for predictive analytics.',
        'Integrated chatbot functionality via RESTful APIs and Entity Framework-like ORM for seamless data flow and cross-device compatibility.',
        'Collaborated in Agile sprints, applying problem-solving to enhance ML model deployment and Git version control.',
    ],
  },
  {
    role: 'Student Intern',
    company: 'Isana Systems',
    location: 'Pune',
    duration: 'Mar 2023 - May 2023',
    description: [
        'Engineered Zoom bot for real-time transcription and speech recognition, integrating JavaScript/Node.js APIs and backend logic with MySQL/PostgreSQL optimizations.',
        'Developed scalable backend services using OOP in Python/C#, handling database queries for improved performance.',
        'Supported full-stack enhancements with TypeScript and Agile practices for reliable API integrations.',
    ],
  },
  {
    role: 'Student Intern',
    company: 'The world of automation',
    location: 'Pune',
    duration: 'Jan 2023 - Feb 2023',
    description: ['Training internship on PLC and SCADA.'],
  },
  {
    role: 'Student Intern',
    company: 'Academor',
    location: 'Pune',
    duration: 'Dec 2022 - Feb 2023',
    description: ['Received a certificate for outstanding performance in the field of data science.'],
  },
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-slate-800 ml-3">
        {experienceData.map((item, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-900 rounded-full -left-3 ring-8 ring-slate-950">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </span>
            <div className="p-6 glass-card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
                <time className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-white/5 w-fit">{item.duration}</time>
              </div>
              <p className="text-sm font-medium text-cyan-400/70 mb-4">{item.company} &middot; {item.location}</p>
              <ul className="mt-4 space-y-3">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/40 flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;