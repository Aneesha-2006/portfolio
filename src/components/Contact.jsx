import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#111827] flex items-center justify-center px-6">
      
      {/* Contact Card */}
      <section className="relative w-full max-w-lg p-10 rounded-[30px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group">
        
        {/* Background Glow Effects */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* Heading */}
        <h2 className="relative text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-12 tracking-wide">
          Contact Me
        </h2>

        {/* Contact Links */}
        <div className="relative flex flex-col gap-6">

          {/* Email */}
          <a
            href="mailto:aneeshaanila56@gmail.com"
            className="group flex items-center justify-between bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50 px-6 py-5 rounded-2xl transition-all duration-500 hover:scale-105"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Email
              </p>

              <p className="text-white text-lg font-medium mt-1">
                aneeshaanila56@gmail.com
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-300 text-xl group-hover:rotate-12 transition duration-500">
              ✉
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:9633127653"
            className="group flex items-center justify-between bg-white/5 border border-purple-400/20 hover:border-purple-400/50 px-6 py-5 rounded-2xl transition-all duration-500 hover:scale-105"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                Phone
              </p>

              <p className="text-white text-lg font-medium mt-1">
                +91 9633127653
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center text-purple-300 text-xl group-hover:-rotate-12 transition duration-500">
              ☎
            </div>
          </a>
        </div>

        {/* Decorative Bottom Line */}
        <div className="relative mt-10 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
      </section>
    </div>
  );
}

export default Contact;