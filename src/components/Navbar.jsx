import React, { useState } from "react";

function Navbar({ scrollToSection }) { // Props ആയി ഫങ്ക്ഷൻ സ്വീകരിക്കുന്നു
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // മൊബൈൽ മെനു ക്ലോസ് ചെയ്യാൻ
  };

  return (
    <nav className="w-full bg-slate-900/60 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        
        <div className="text-xl font-bold tracking-wider text-cyan-400 cursor-pointer" onClick={() => handleNavClick("home")}>
          Aneesha
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button onClick={() => handleNavClick("home")} className="text-cyan-400">Home</button>
          <button onClick={() => handleNavClick("about")} className="text-gray-300 hover:text-cyan-400">About</button>
          <button onClick={() => handleNavClick("education")} className="text-gray-300 hover:text-cyan-400">Education</button>
          <button onClick={() => handleNavClick("skills")} className="text-gray-300 hover:text-cyan-400">Skills</button>
          <button onClick={() => handleNavClick("contact")} className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-full font-bold">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 px-6 py-4 space-y-4 absolute w-full left-0 text-white">
          <button onClick={() => handleNavClick("home")} className="block text-cyan-400">Home</button>
          <button onClick={() => handleNavClick("about")} className="block text-gray-300">About</button>
          <button onClick={() => handleNavClick("education")} className="block text-gray-300">Education</button>
          <button onClick={() => handleNavClick("skills")} className="block text-gray-300">Skills</button>
          <button onClick={() => handleNavClick("contact")} className="block bg-cyan-500 text-slate-950 px-4 py-2 rounded-full text-center">Contact</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;