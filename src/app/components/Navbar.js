'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [showSkills, setShowSkills] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-lg bg-black/70 text-white p-4 shadow-xl sticky top-0 z-50 rounded-b-2xl border-b border-white/10" style={{ scrollBehavior: 'smooth' }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="font-extrabold text-3xl tracking-wide bg-white bg-clip-text text-transparent drop-shadow-lg">Saim-Dev</h1>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none border border-white/20 bg-gradient-to-br from-[#0a1817] via-[#1a2a2a] to-[#2a3a3a] shadow-lg"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
        </button>
        {/* Menu links: hidden on mobile unless menuOpen is true */}
        <div className={`flex-col md:flex-row md:flex items-center gap-4 md:gap-6 justify-center md:justify-end w-full md:w-auto absolute md:static top-16 left-0 right-0 bg-black/80 md:bg-transparent p-4 md:p-0 transition-all duration-300 z-40 rounded-b-2xl shadow-xl border-b border-white/10 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <a href="#home" className="relative py-2 px-3 rounded-lg md:bg-transparent bg-[#0a1817] font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black hover:text-white group" onClick={() => setMenuOpen(false)}>
            Home
            <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </a>
          <a href="#about" className="relative py-2 px-3 rounded-lg md:bg-transparent bg-[#0a1817] font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black hover:text-white group" onClick={() => setMenuOpen(false)}>
            About
            <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </a>
          <div className="relative">
            <button
              className="relative focus:outline-none py-2 px-3 rounded-lg md:bg-transparent bg-[#0a1817] font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black hover:text-white group"
              onClick={() => {
                setShowSkills(prev => !prev);
                setMenuOpen(true);
              }}
            >
              Skills
              <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
            </button>
            {showSkills && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2 z-50">
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
          <a href="#projects" className="relative py-2 px-3 rounded-lg md:bg-transparent bg-[#0a1817] font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black hover:text-white group" onClick={() => setMenuOpen(false)}>
            Projects
            <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </a>
          <a href="#contact" className="relative py-2 px-3 rounded-lg md:bg-transparent bg-[#0a1817] font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black hover:text-white group" onClick={() => setMenuOpen(false)}>
            Contact
            <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </a>
           <a
            href="/Saim Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-2 px-4 rounded-lg md:bg-transparent bg-[#0a1817] font-bold shadow-lg border-2 border-white/20 text-white bg-gradient-to-r from-balck-400 to-white-500 transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black hover:text-white group"
            onClick={() => setMenuOpen(false)}
          >
            Resume
            <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
