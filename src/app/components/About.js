import React from 'react';

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-16 px-2 md:px-4 text-center bg-gradient-to-b rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-green-400 tracking-wide">About Me</h2>
      <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto ">
        I am <span className="text-green-300 font-semibold">Muhammad Saim Khan</span>, a passionate Full Stack Developer specializing in <span className="text-green-300">React</span>, <span className="text-green-300">Next.js</span>, <span className="text-green-300">Node.js</span>, and modern web technologies. I love building scalable web applications and solving real-world problems with code.
      </p>
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
    </section>
  );
}
