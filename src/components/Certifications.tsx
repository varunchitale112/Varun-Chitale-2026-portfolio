
import React from 'react';
import Section from './Section';
import type { CertificationItem } from '../types';

const certificationData: CertificationItem[] = [
    {
        title: 'Advanced Python: Python OOP with 10 Real-world programs',
        provider: 'Udemy',
        date: 'Mar 2022'
    },
    {
        title: 'Machine Learning A-Z: Hands-On Python & R in data science',
        provider: 'Udemy',
        date: 'Mar 2022'
    },
    {
        title: 'The Web Developer Bootcamp 2022',
        provider: 'Udemy',
        date: 'Mar 2022'
    },
    {
        title: 'Mastering Data Structures & Algorithms using C and C++',
        provider: 'Udemy',
        date: 'Feb 2022'
    },
];

const Certifications: React.FC = () => {
    return (
        <Section id="certifications" title="Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificationData.map((cert, index) => (
                    <div key={index} className="p-6 glass-card group">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors pr-4">{cert.title}</h3>
                            <span className="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded border border-white/5 uppercase">{cert.date}</span>
                        </div>
                        <p className="text-sm font-medium text-cyan-400/70">{cert.provider}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;