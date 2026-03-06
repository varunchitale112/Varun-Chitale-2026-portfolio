
import React from 'react';
import Section from './Section';
import type { ProjectItem } from '../types';
import { Folder } from 'lucide-react';

const projectsData: ProjectItem[] = [
  {
    title: 'TaskMaster – Full-Stack Task Management System',
    context: 'Personal Project',
    duration: '2024 - 2025',
    description: 'Built ASP.NET Core MVC, C#, Entity Framework Core, SQL Server app for task CRUD, JWT authentication, role-based access (Admin/User), and SignalR real-time collaboration. Developed RESTful APIs with prompt injection validation, integrated React.js, TypeScript, ES6+, HTML5/CSS3 frontend and Python/Flask ML microservices for AI task prioritization. Applied OOP, Agile, Git; Docker containerized, Azure deployed.',
    tags: ['ASP.NET Core', 'C#', 'React.js', 'SignalR', 'Docker', 'Azure'],
  },
  {
    title: 'CyberVote – Secure Real-Time Voting Platform',
    context: 'Personal Project',
    duration: '2024',
    description: 'Engineered Spring Boot 3.x, Java 17, Spring Security (JWT/OAuth2), Spring Data JPA, PostgreSQL backend with Swagger APIs, Prompt/Hallucination Detection middleware. Built Angular 18, TypeScript, ES6+, Bootstrap 5 frontend with WebSocket/STOMP live updates; integrated Python/FastAPI ML via OpenFeign (97% fraud detection accuracy).',
    tags: ['Spring Boot', 'Java', 'Angular', 'PostgreSQL', 'WebSocket', 'FastAPI'],
  },
  {
    title: 'Agri-Assistant – Smart Farming Intelligence',
    context: 'Personal Project',
    duration: '2024',
    description: 'Developed Python, Flask, PostgreSQL platform with scikit-learn Random Forest (92% accuracy), Gemini AI, OpenWeather, OpenAI chatbot (Prompt Injection Detection), Google Maps. Created HTML5/CSS3, JavaScript, Bootstrap, Chart.js responsive dashboards with PDF reports using OOP, Agile, Git.',
    tags: ['Python', 'Flask', 'Gemini AI', 'Scikit-learn', 'Google Maps'],
  },
  {
    title: 'AgriCare - AI-Powered Smart Agriculture Platform',
    context: 'QUAMIN TECH SOLUTIONS LLP',
    duration: 'Apr 2025 - Present',
    description: 'A comprehensive smart agriculture platform that revolutionizes farming through cutting-edge technology integration. Built as a full-stack web application, it provides farmers with AI-powered insights, real-time monitoring, and data-driven decision-making tools.',
    tags: ['AI', 'Full-Stack', 'Web App', 'Agriculture'],
  },
  {
    title: 'AI Chatbot with Background App & Browser Extension',
    context: 'INTELLIPAAT',
    duration: 'Mar 2025 - Present',
    description: 'A cross-platform AI solution with a browser extension that analyzes webpages and videos in real-time. The system uses NLP and ML models to extract insights, summarize key points, and provide contextual responses via a chatbot interface using MS SQL Server for storage.',
    tags: ['AI', 'NLP', 'ML', 'Browser Extension', 'MS SQL Server'],
  },
  {
    title: 'Crop Yield Prediction using Machine Learning',
    context: 'AISSMS IOIT',
    duration: 'Oct 2023',
    description: 'Developed a crop yield and price prediction model using Random Forest, SVM, and XGBoost. Built a web application using HTML, JavaScript, and Flask to enable real-time predictions for farmers and stakeholders.',
    tags: ['Machine Learning', 'Random Forest', 'SVM', 'XGBoost', 'Flask'],
  },
  {
    title: 'Asthma Severity Detection Using AI & Machine Learning',
    context: 'AISSMS IOIT',
    duration: 'Aug 2024',
    description: 'Developed ML models (Random Forest, SVM, XGBoost) for an AI-driven asthma severity detection system. Deployed a web application using Flask, HTML, JavaScript, and CSS for real-time severity assessment.',
    tags: ['AI', 'Machine Learning', 'Flask', 'Healthcare'],
  },
  {
    title: 'Zoom Bot Development',
    context: 'Isana Systems',
    duration: 'Apr 2023',
    description: 'Developed a Zoom bot using the Zoom API and Google Speech-to-Text API to automatically convert speech to text, generate meeting notes, and provide concise summaries using NLP techniques for enhanced accuracy.',
    tags: ['Automation', 'Zoom API', 'Google Cloud', 'NLP', 'Python'],
  },
  {
    title: 'Stock Price Prediction using Machine Learning',
    context: 'ACADEMOR',
    duration: 'Jan 2023',
    description: 'Developed a stock price forecasting model using Random Forest, XGBoost, and LSTM networks. Designed a web-based dashboard using Flask, HTML, JavaScript, and Chart.js to visualize forecasts.',
    tags: ['Machine Learning', 'LSTM', 'Flask', 'Chart.js', 'Finance'],
  },
];
const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="p-6 glass-card group">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Folder className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
                <p className="text-sm font-medium text-cyan-400/70">{project.context}</p>
              </div>
              <time className="text-xs font-mono text-slate-500 mt-2 sm:mt-0 bg-slate-800/50 px-2 py-1 rounded border border-white/5">{project.duration}</time>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-slate-800/50 text-slate-300 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;