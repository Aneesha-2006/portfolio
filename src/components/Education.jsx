import React from "react";

function Education() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#090a0f] p-6 relative overflow-hidden font-sans">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      {/* Education Premium Card */}
      <div className="relative group bg-[#11131e]/60 backdrop-blur-2xl border border-white/[0.05] shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-3xl p-8 max-w-md w-full transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        
        {/* Decorative Top Line Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-t-3xl" />

        {/* Section Header with Icon Vibe */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-500">
            {/* Minimalist Graduation Cap Icon using SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.231-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a44.61 44.61 0 0 1 15.482 0m-15.482 0L12 5.587l7.738 4.56M12 12.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase">
            Education
          </h2>
        </div>

        {/* Course Details (Main Highlight) */}
        <div className="relative pl-4 border-l-2 border-purple-500/30 group-hover:border-purple-500 transition-colors duration-500">
          
          {/* Animated dot on the line */}
          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          
          <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
            Currently Pursuing
          </span>

          <h3 className="text-lg font-bold text-white mt-3 mb-1 tracking-wide group-hover:text-purple-300 transition-colors duration-300">
            Diploma in Computer Engineering
          </h3>

          <p className="text-sm text-slate-400 font-medium leading-relaxed mt-2">
            Govt. Women's Polytechnic College, Trivandrum
          </p>
        </div>

        {/* Bottom subtle tech accent */}
        <div className="mt-6 flex justify-between items-center text-[11px] text-slate-500 font-mono pt-4 border-t border-white/[0.04]">
          <span> Academic Profile</span>
          <span className="text-purple-400/60 group-hover:text-purple-400 transition-colors">Trivandrum, Kerala</span>
        </div>

      </div>
    </div>
  );
}

export default Education;