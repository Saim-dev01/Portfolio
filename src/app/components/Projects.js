import React from 'react';

const projects = [
  {
    title: 'AlgoCraft - Algorithm Visualizer',
    description: 'A dynamic web application that visualizes data structures and algorithms including trees, sorting, and searching. Features step-by-step animations, custom input, and real-time traversal highlights to help students and developers learn interactively.',
    tech: ['React.js', 'Bootstrap', 'D3.js', 'Tailwind CSS', 'Firebase']
  },
   {
    title: 'SecureAccess - Entry Management System',
    description: 'An intelligent entry management system leveraging face recognition and anomaly detection for secure facility access. Includes real-time authentication, admin dashboard, visitor logs, and automated alerts using AI-driven monitoring.',
    tech: ['React.js', 'Express.js', 'Firebase', 'OpenCV']
  }
];     

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-16 px-2 md:px-4 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-green-400 text-center tracking-wide">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-black/80 border border-green-900 rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 text-green-300 flex items-center gap-2">
              <span className="text-green-300">{project.title}</span>
              <span className="text-lg">🚀</span>
            </h3>
            <p className="text-gray-200 mb-4 text-left">{project.description}</p>
            {project.title === 'AlgoCraft - Algorithm Visualizer' && (
              <a
                href="https://algo-craft-amber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 mb-4 px-3 py-1.5 bg-gradient-to-r from-green-400 via-teal-400 to-green-600 text-white rounded-full font-bold shadow-lg ring-2 ring-green-500 hover:ring-teal-400 hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse"
                style={{ textShadow: '0 0 8px #00ffae' }}
              >
                <span>Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087a48.113 48.113 0 0 1 3.922-.567c.527-.045.948.386.948.916v9.128a.917.917 0 0 1-.948.916c-1.28-.11-2.6-.282-3.922-.567m-4.5-9.826a48.113 48.113 0 0 0-3.922.567A.917.917 0 0 0 3.75 6.436v9.128c0 .53.421.961.948.916 1.28-.11 2.6-.282 3.922-.567m4.5-9.826v13.826m-4.5-13.826v13.826" />
                </svg>
              </a>
            )}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
