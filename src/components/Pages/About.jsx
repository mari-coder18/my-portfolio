import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 font-inter tracking-[0.3em] uppercase">About Me</p>
          <h2 className="text-3xl md:text-5xl font-black mt-3">Full Stack Developer</h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-inter leading-snug">
              Turning complex problems into elegant, scalable web solutions.
            </h3>
            <p className="mt-6 text-gray-300 leading-8">
              I am a passionate Full Stack Developer skilled in <span className="text-yellow-400 font-bold">React, Node.js, Express, and MySQL</span>. 
              I love building real-world projects and bridging the gap between design and technical implementation.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link to="/contact" className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition duration-300">Hire Me</Link>
              <Link to="/projects" className="px-8 py-3 border border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300">View Projects</Link>
            </div>
          </motion.div>

          {/* Right Side: Professional Background */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            
            {/* Education Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-yellow-400/50 transition duration-300">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">🎓 Education</h4>
              <div className="border-l-2 border-yellow-400 pl-4 py-1">
                <p className="font-bold text-base  md:text-lg">Bachelor of Information Technology</p>
                <p className="text-gray-400 text-sm">T.D.M.N.S College , T.kallikulam</p>
                <p className="text-yellow-400 text-xs mt-1">2022 - 2025</p>
              </div>
            </div>

            {/* Internship Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-400/50 transition duration-300">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">💼 Internship Experience</h4>
              <div className="border-l-2 border-cyan-400 pl-4">
                <p className="font-bold">Web Development Intern</p>
                <p className="text-gray-400 text-sm">Jaz Info Tech Tirunelveli (Feb2026 - May2026)</p>
                <p className="text-cyan-400 text-xs mt-1 font-semibold">Focused on building responsive UI & API integration.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}