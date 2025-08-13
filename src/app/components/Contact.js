import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-12 px-4 text-center bg-black/70 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-4 text-green-300 tracking-wide">Let&apos;s Connect</h2>
      <p className="text-base text-gray-200 mb-8 max-w-md mx-auto">
  I&apos;m currently looking for new opportunities. My inbox is always open—whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="flex gap-8 justify-center mb-6">
        <a href="https://github.com/saimkhan-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-4xl text-gray-300 hover:text-green-400 transition-colors">
          <FaGithub />
        </a>
        <a href="https://pk.linkedin.com/in/saim-khan-22397a250" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-4xl text-gray-300 hover:text-green-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="mailto:saim02630@gmail.com" aria-label="Email" className="text-4xl text-gray-300 hover:text-green-400 transition-colors">
          <MdEmail />
        </a>
        <a href="https://wa.me/923059802256" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-4xl text-gray-300 hover:text-green-400 transition-colors">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/saimk_001" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-4xl text-gray-300 hover:text-pink-400 transition-colors">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
