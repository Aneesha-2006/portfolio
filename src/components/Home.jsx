import React, { useState } from "react";
import Navbar from "./Navbar";
function Home() {
  // Mobile menu ഓപ്പൺ ചെയ്യാനും ക്ലോസ് ചെയ്യാനും
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 text-white flex flex-col justify-between">
      
      {/* --- NAVBAR START --- */}
     
      {/* --- NAVBAR END --- */}


      {/* --- HOME SECTION ONLY --- */}
      <main className="flex-grow pt-16 flex items-center justify-center">
        <section className="w-full flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
          
          {/* ബാക്ക്ഗ്രൗണ്ടിൽ മനോഹരമായ വലിയൊരു ഗ്ലോ ഇഫക്റ്റ് */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
          
          {/* പ്രൊഫൈൽ ഇമേജ് */}
          <div className="relative mb-8">
            <img
              className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)] transform hover:scale-105 transition-transform duration-300"
              src="./image/aneesha.jpeg"
              alt="Aneesha"
            />
            <span className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-slate-900 rounded-full animate-pulse"></span>
          </div>
          
          {/* പേര് */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Aneesha A
          </h1>
          
          {/* ടൈറ്റിൽ */}
          <h2 className="text-cyan-400 text-xl md:text-3xl font-semibold mb-6 tracking-wider uppercase">
            Future Software Engineer
          </h2>
          
          {/* വിവരണം */}
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed px-2">
            Software Engineering Student passionate about building modern web applications and creating beautiful user experiences.
          </p>
        </section>
      </main>
      {/* --- HOME SECTION END --- */}

    </div>
  );
}

export default Home;