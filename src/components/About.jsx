import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-6">
      
      {/* Glass Card */}
      <div className="relative max-w-2xl p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group">
        
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-125 transition duration-700"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-125 transition duration-700"></div>

        {/* Heading */}
        <h1 className="relative text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 tracking-wide">
          About Me
        </h1>

        {/* Paragraph */}
        <p className="relative text-gray-300 leading-8 text-lg tracking-wide">
          I am currently studying to become a{" "}
          <span className="text-cyan-400 font-semibold">
            Software Engineer
          </span>.
          <br />
          I enjoy learning new technologies and solving problems through coding.
          Passionate about creating modern, user-friendly, and visually appealing web applications.
        </p>

        {/* Decorative Line */}
        <div className="relative mt-8 w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
      </div>
    </div>
  );
}

export default About;