import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-black py-20 px-6 text-white border-b border-yellow-400/10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4">Who I'm</h2>
          <h1 className="text-3xl md:text-4xl font-black leading-tight m">I'am <span className="text-yellow-500"> Marimuthu U.</span></h1>
          <h3 className="text-2xl md:text-4xl font-black leading-tight mb-6">
            Building digital experiences that matter.
          </h3>
          <p className="text-gray-400 leading-8 mb-8">
            As a Full Stack Developer, I bridge the gap between complex backend logic and sleek, responsive frontend design. 
            I'm passionate about writing clean, scalable code and turning ideas into functional web applications.
          </p>
          
          <Link 
            to="/about" 
            className="inline-block border border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Read My Full Story
          </Link>
        </motion.div>

        {/* Right Side: Skill Highlight */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 p-8 rounded-3xl border border-white/10"
        >
          <h4 className="text-xl font-bold mb-6">Core Competencies</h4>
          <div className="space-y-4">
            {["Frontend Development (React, Tailwind)", "Backend & API (Node.js, Express)", "Database Management (MySQL)", "Responsive UI/UX Design"].map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-yellow-400">◆</span>
                <span className="text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}