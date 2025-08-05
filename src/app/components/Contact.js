import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-full mx-auto py-16 px-4 text-center bg-gradient-to-b from-[#0a1817] via-[#0a1817] to-black rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-green-400 tracking-wide">Contact Me</h2>
      <p className="text-lg text-gray-200 mb-8">Feel free to reach out for collaborations or just a friendly chat!</p>

      <div className="space-y-4 text-white text-lg">
        <p>
          📞 <a href="tel:+923166562001" className="text-green-300 hover:underline">+92-316-6562001</a>
        </p>
        <p>
          📧 <a href="mailto:saim02630@gmail.com" className="text-green-300 hover:underline">saim02630@gmail.com</a>
        </p>
        <p>
          🔗 <a href="https://pk.linkedin.com/in/saim-khan-22397a250" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
}
