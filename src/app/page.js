
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React from 'react';

export default function Home() {
  return (
    <>
        <div className="bg-black ">
     
      <Navbar />
      {/* Landing split section */}
      <section id="home" className="w-screen min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#0a1817] via-[#0a1817] to-black p-0 md:p-10">
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <img
            src="/pic.jpg"
            alt="Muhammad Saim Khan profile"
            className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg border-4 border-white"
          />
          <h1 className="text-5xl font-bold mb-4 text-white">
            Hi, <span className="text-green-400 font-semibold">Muhammad Saim Khan</span>
          </h1>
          <p className="text-xl text-gray-400 mb-6">Full Stack Developer | React | Next.js | Node.js</p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded shadow">React.js</span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded shadow">Next.js</span>
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-3 py-1 rounded shadow">Node.js</span>
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded shadow">MongoDB</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded shadow">Tailwind CSS</span>
          </div>
        </div>
        <div
          className="flex-1 flex items-center justify-center h-full p-0 md:p-8"
          style={{
            backgroundImage: "url('/bg1.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
            minHeight: '400px',
          }}
        >
        </div>
       </section>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      </div>
      <footer className="bg-black text-white text-center py-6">
        <p className="text-sm">© 2023 Muhammad Saim Khan. All rights reserved.</p>
      </footer>
    </>
  );
}