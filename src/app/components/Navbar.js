'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md sticky top-0 z-50" style={{ scrollBehavior: 'smooth' }}>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4 md:gap-0">
        <h1 className="font-bold text-2xl tracking-wide">Muhammad Saim Khan</h1>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-end w-full">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <div className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setShowSkills(prev => !prev)}
            >
              Skills
            </button>
            {showSkills && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2 z-10">
                <div className="px-4 py-2 font-semibold">Frontend</div>
                <ul className="px-4 pb-2 text-sm">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>JavaScript</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                  <li>D3.js</li>
                  <li>OpenCV</li>
                </ul>
                <div className="px-4 py-2 font-semibold">Backend</div>
                <ul className="px-4 pb-2 text-sm">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            )}
          </div>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="https://github.com/saimkhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="/Saim Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-3 py-1 rounded font-semibold hover:bg-gray-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
