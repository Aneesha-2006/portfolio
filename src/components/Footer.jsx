import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 pt-10 pb-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section: Name, Links, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand / Name Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wider text-cyan-400">Aneesha</h3>
            <p className="text-sm text-gray-500 mt-1">Future Software Engineer | Portfolio</p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="/education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="/skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Media SVG Icons (No Install Required) */}
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-slate-900 border border-white/10 p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-900 border border-white/10 p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Mail */}
            <a href="mailto:your-email@example.com" className="bg-slate-900 border border-white/10 p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Aneesha. All rights reserved.</p>
          
          {/* Back to top Button */}
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors text-sm font-medium focus:outline-none group"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;