"use client";

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  // Typing effect states
  const [current, setCurrent] = useState(0); // 0: name, 1: role
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const names = ['Muhammad Saim Khan', 'Web Developer'];
    let timeout;
    if (typing) {
      if (displayed.length < names[current].length) {
        timeout = setTimeout(() => {
          setDisplayed(names[current].slice(0, displayed.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(names[current].slice(0, displayed.length - 1));
        }, 90);
      } else {
        setCurrent((prev) => (prev + 1) % names.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, current]);

  useEffect(() => {
    setDisplayed('');
    setTyping(true);
  }, [current]);

  return (
    <>
  {/* Solid black background */}
  <div className="fixed inset-0 w-full h-full -z-10 bg-black"></div>
      <div className="relative z-10">
        <Navbar />
        <section id="home" className="w-screen min-h-[100vh] flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 md:px-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-left p-0 md:p-12 gap-4 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
              <div className="flex items-center gap-2">
              Hello, I&apos;m{' '}
              </div>
                <span
                className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent font-extrabold animate-gradient-move transition-all duration-700"
                key={current}
              >
                {displayed}
                <span className="border-r-2 border-white ml-1 animate-pulse">&nbsp;</span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">Full Stack Web Developer</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-gradient-to-r from-sky-600 to-blue-800 text-white px-3 py-1 rounded-full shadow font-semibold tracking-wide">React.js</span>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-3 py-1 rounded-full shadow font-semibold tracking-wide">Next.js</span>
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-3 py-1 rounded-full shadow font-semibold tracking-wide">Node.js</span>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-3 py-1 rounded-full shadow font-semibold tracking-wide">MongoDB</span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-400 text-white px-3 py-1 rounded-full shadow font-semibold tracking-wide">Tailwind CSS</span>
            </div>
          </div>
          {/* Right: Profile Picture */}
          <div className="flex-1 flex justify-center items-center p-0 md:p-12">
            <div className="relative flex items-center justify-center">
              <div className="relative rounded-full p-1 bg-gradient-to-tr from-green-400 via-blue-400 to-purple-500 shadow-2xl w-56 h-72 md:w-80 md:h-[26rem] flex items-center justify-center">
                <div className="rounded-full overflow-hidden bg-white w-full h-full flex items-center justify-center">
                  <Image
                    src="/pic.jpg"
                    alt="Muhammad Saim Khan profile"
                    width={320}
                    height={416}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="bg-black bg-opacity-70"> */}
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          {/* </div> */}
        </div>
        <footer className="bg-black bg-opacity-80 text-white text-center py-6">
          <p className="text-sm">© 2025 Muhammad Saim Khan. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}