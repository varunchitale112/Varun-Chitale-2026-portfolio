import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <div className="p-6 glass-card space-y-4 text-slate-400">
        <p className="leading-relaxed">
          I am an <span className="text-slate-200">AI/ML-fullstack software engineer</span> with a strong foundation in Electronics and Telecommunication Engineering. My expertise lies in bridging the gap between complex machine learning models and robust full-stack applications.
        </p>
        <p className="leading-relaxed">
          With experience ranging from developing AI-based cybersecurity applications to building smart agriculture platforms, I thrive on solving real-world problems using <span className="text-slate-200">Python, Java</span>, and modern web technologies. I am committed to delivering high-quality, efficient solutions while continuously evolving with the latest advancements in AI and software engineering.
        </p>
      </div>
    </Section>
  );
};

export default About;