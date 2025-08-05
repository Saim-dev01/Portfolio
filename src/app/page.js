
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Full site GIF background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image src="/bg1.gif" alt="Site background gif" fill priority className="object-cover blur-md" style={{ minHeight: '100vh' }} />
        <div className="absolute inset-0 "></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <section id="home" className="w-screen min-h-[100vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 gap-4">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Hi, I&apos;m <span className="text-green-400 font-semibold">Muhammad Saim Khan</span>
            </h1>
            <p className="text-xl text-white-400 mb-6">Full Stack Web Developer | MERN Stack</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded shadow">React.js</span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded shadow">Next.js</span>
              <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-3 py-1 rounded shadow">Node.js</span>
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded shadow">MongoDB</span>
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded shadow">Tailwind CSS</span>
            </div>
          </div>
          {/* Right: Profile Picture */}
          <div className="flex-1 flex justify-center items-center p-8">
            <Image
              src="/pic.jpg"
              alt="Muhammad Saim Khan profile"
              width={200}
              height={200}
              className="w-80 h-80 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white mx-auto"
              priority
            />
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