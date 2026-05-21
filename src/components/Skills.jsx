import React from "react";

function Skills() {
  const skills = ["Python", "C Programming", "HTML", "CSS"];

  return (
    <div className="min-h-screen bg-[#070b14] flex items-center justify-center px-6">
      
      {/* Main Card */}
      <section className="relative max-w-3xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.4)]">
        
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

        {/* Heading */}
        <h2 className="relative text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-12 tracking-wide">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center h-28 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 transition duration-500"></div>

              {/* Skill Text */}
              <span className="relative text-white font-semibold tracking-wide text-lg group-hover:text-cyan-300 transition duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="relative mt-12 mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
      </section>
    </div>
  );
}

export default Skills;