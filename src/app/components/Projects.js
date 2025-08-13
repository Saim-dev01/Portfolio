import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'AlgoCraft - Algorithm Visualizer',
    description: 'A dynamic web application that visualizes data structures and algorithms including trees, sorting, and searching. Features step-by-step animations, custom input, and real-time traversal highlights to help students and developers learn interactively.',
    tech: ['React.js', 'Bootstrap', 'D3.js', 'Tailwind CSS', 'Firebase'],
    demo: 'https://algo-craft-amber.vercel.app/',
    image: '/algocraft.png', // Place your image in public/
  },
  {
    title: 'SecureAccess - Entry Management System',
    description: 'An intelligent entry management system leveraging face recognition and anomaly detection for secure facility access. Includes real-time authentication, admin dashboard, visitor logs, and automated alerts using AI-driven monitoring.',
    tech: ['React.js', 'Express.js', 'Firebase', 'OpenCV'],
    demo: 'https://secure-entry-management.vercel.app',
    image: '/secure.png',
  },
  {
    title: 'ResuMate – Your smart resume companion.',
    description: 'A fast and accurate ATS resume checker that analyzes your CV for formatting, keywords, and compliance, helping you optimize it for maximum recruiter visibility and better job opportunities.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    demo: 'https://github.com/Saim-dev01/ATS-Checker',
    image: '/resumate.png',
  }
];

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-16 px-2 md:px-4 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-green-400 text-center tracking-wide">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`group backdrop-blur-lg bg-gradient-to-br from-black/90 via-black/80 to-green-950 border border-green-900 rounded-2xl shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden
              transition-transform duration-500 hover:scale-[1.04] hover:shadow-green-700/40 animate-fade-in-up`}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-400/10 via-teal-400/10 to-purple-500/10 z-0" />
            {project.image && (
              <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-black/60 border border-green-900">
                <Image
                  src={project.image}
                  alt={project.title + ' preview'}
                  width={400}
                  height={180}
                  className="object-contain w-full h-full bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                  priority={false}
                />
              </div>
            )}
            <h3 className="text-2xl font-bold mb-3 text-green-300 flex items-center gap-2 z-10">
              <span className="text-green-300">{project.title}</span>
              <span className="text-lg">🚀</span>
            </h3>
            <p className="text-gray-200 mb-4 text-left z-10">{project.description}</p>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 mb-4 px-4 py-2 bg-green-700 text-white rounded-full font-semibold shadow-sm ring-1 ring-green-800 hover:bg-green-800 hover:ring-green-500 hover:scale-100 transition-all duration-150 text-base z-10"
                style={{ textShadow: 'none' }}
              >
                <span>{project.title.split(' - ')[0].split('–')[0].trim()} Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087a48.113 48.113 0 0 1 3.922-.567c.527-.045.948.386.948.916v9.128a.917.917 0 0 1-.948.916c-1.28-.11-2.6-.282-3.922-.567m-4.5-9.826a48.113 48.113 0 0 0-3.922.567A.917.917 0 0 0 3.75 6.436v9.128c0 .53.421.961.948.916 1.28-.11 2.6-.282 3.922-.567m4.5-9.826v13.826m-4.5-13.826v13.826" />
                </svg>
              </a>
            )}
            <div className="flex flex-wrap gap-2 mt-auto z-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm hover:bg-green-900 transition-colors duration-150"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Animation keyframes for fade-in-up */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
}
