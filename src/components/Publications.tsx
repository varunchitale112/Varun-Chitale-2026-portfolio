
import React from 'react';
import Section from './Section';
import type { PublicationItem } from '../types';
import { ExternalLink, BookOpen } from 'lucide-react';

const publicationsData: PublicationItem[] = [
  {
    title: 'Performance Analysis of Emotion Recognition Using YOLO',
    journal: 'ITEGAM-JETIA',
    date: 'Feb 20, 2026',
    link: 'https://itegam-jetia.org/journal/index.php/jetia/article/view/2880',
  },
];

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications">
      <div className="space-y-6">
        {publicationsData.map((pub, index) => (
          <div key={index} className="p-6 glass-card group">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {pub.title}
                  </h3>
                </div>
                <p className="text-slate-400 font-medium">
                  {pub.journal} <span className="text-slate-600 mx-2">•</span> {pub.date}
                </p>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all self-start text-sm font-bold uppercase tracking-widest"
              >
                <ExternalLink className="w-4 h-4" />
                View Article
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
