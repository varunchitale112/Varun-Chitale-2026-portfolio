
import React from 'react';
import Section from './Section';
import type { SkillCategory } from '../types';
import { Code2, Layers, Wrench, Globe, MessageSquare, Terminal } from 'lucide-react';

const skillsData: (SkillCategory & { icon: React.ReactNode })[] = [
  {
    title: 'Languages',
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    skills: ['Python', 'Core Java', 'ASP.NET framework', 'JavaScript', 'OOPS concepts', 'Data structures'],
  },
  {
    title: 'Frameworks',
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    skills: ['TensorFlow', 'Pytorch', 'Django', 'Devops pipelines', 'Spring boot', 'React', 'Angular'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-5 h-5 text-cyan-400" />,
    skills: ['ReactJS', 'MongoDB', 'SQL', 'REST API', 'JSP', 'HTML/CSS'],
  },
  {
    title: 'Platforms',
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    skills: ['Git', 'Postman', 'VS Code', 'MS Server Management Studio'],
  },
  {
    title: 'Soft Skills',
    icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
    skills: ['Excellent communication', 'Time Management', 'Problem Solving', 'Agile methodology'],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <div key={category.title} className="p-5 glass-card">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="font-semibold text-slate-100">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div key={skill} className="bg-cyan-500/5 text-cyan-400/80 text-xs font-medium px-3 py-1.5 rounded-lg border border-cyan-500/10 transition-all hover:bg-cyan-500/10 hover:text-cyan-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;