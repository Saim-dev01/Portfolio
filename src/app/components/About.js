import React, { useState } from 'react';

export default function About() {
  const [tab, setTab] = useState('skills');
  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-16 px-2 md:px-4 text-center bg-gradient-to-b rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-green-400 tracking-wide">About Me</h2>
      <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto ">
        I am <span className="text-green-300 font-semibold">Muhammad Saim Khan</span>, a passionate Full Stack Developer specializing in <span className="text-green-300">React</span>, <span className="text-green-300">Next.js</span>, <span className="text-green-300">Node.js</span>, and modern web technologies. I love building scalable web applications and solving real-world problems with code.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-bold border-2 transition-all duration-200 text-base md:text-lg ${tab === 'skills' ? 'bg-gradient-to-r from-green-400 to-teal-400 text-black border-green-400 shadow-lg' : 'bg-black text-green-300 border-green-700 hover:bg-green-900/30'}`}
          onClick={() => setTab('skills')}
        >
          Skills
        </button>
        <button
          className={`px-6 py-2 rounded-full font-bold border-2 transition-all duration-200 text-base md:text-lg ${tab === 'education' ? 'bg-gradient-to-r from-green-400 to-teal-400 text-black border-green-400 shadow-lg' : 'bg-black text-green-300 border-green-700 hover:bg-green-900/30'}`}
          onClick={() => setTab('education')}
        >
          Education
        </button>
      </div>
      {tab === 'skills' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="backdrop-blur-lg bg-black/80 border border-green-900 rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-green-300 flex items-center justify-center gap-2">
              <span>Frontend Skills</span>
              <span className="text-xl">⚡</span>
            </h3>
            <ul className="list-none text-left text-gray-200 space-y-2">
              <li><span className="text-green-400">●</span> React.js</li>
              <li><span className="text-green-400">●</span> Next.js</li>
              <li><span className="text-green-400">●</span> JavaScript (ES6+)</li>
              <li><span className="text-green-400">●</span> Tailwind CSS</li>
              <li><span className="text-green-400">●</span> Redux</li>
              <li><span className="text-green-400">●</span> D3.js</li>
              <li><span className="text-green-400">●</span> openCV</li>
            </ul>
          </div>
          <div className="backdrop-blur-lg bg-black/80 border border-green-900 rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-green-300 flex items-center justify-center gap-2">
              <span>Backend Skills</span>
              <span className="text-xl">🛠️</span>
            </h3>
            <ul className="list-none text-left text-gray-200 space-y-2">
              <li><span className="text-green-400">●</span> Node.js</li>
              <li><span className="text-green-400">●</span> Express.js</li>
              <li><span className="text-green-400">●</span> MongoDB</li>
              <li><span className="text-green-400">●</span> Firebase</li>
              <li><span className="text-green-400">●</span> REST APIs</li>
              <li><span className="text-green-400">●</span> Authentication & Authorization</li>
              <li><span className="text-green-400">●</span> SQL</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[200px] bg-black/80 border border-green-900 rounded-xl shadow-lg p-6 animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-4 text-green-300 flex items-center gap-2">
            <span>Education</span>
            <span className="text-xl">🎓</span>
          </h3>
          <ul className="list-none text-left text-gray-200 space-y-2 max-w-xl mx-auto">
            <li><span className="text-green-400">●</span> BS Computer Science, National University Of Modern Languages-Islamabad, 2021-2025</li>
            <li><span className="text-green-400">●</span> ICS, Punjab Group Of Colleges, 2019-2021</li>
            {/* Add more education details as needed - remove this comment to fix lint error */}
          </ul>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
}
