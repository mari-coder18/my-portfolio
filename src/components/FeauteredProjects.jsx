import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import your images here
import CustomerManagement from "../assets/CustomerManagement.jpeg";
import BusTracker from "../assets/BusTracker.jpeg"

const projects = [
  {
    title: "CRM With Automation",
    image: CustomerManagement,
    description: "A scalable CRM system with automated workflows, secure authentication, and real-time database management.",
    techStack: ["React", "Node.js", "MySQL", "Tailwind"],
    github: "https://github.com/mari-coder18",
    live: "#" 
  },
  {
    title: "Bus Tracking App",
    description: "A location-based tracking system for rural routes, providing real-time bus updates and timing optimization.",
    image: BusTracker,
    techStack: ["React", "Tailwind", "Express", "MySQL"],
    github: "https://github.com/mari-coder18",
    live: "#"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-950 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-3">Work</h2>
          <h3 className="text-3xl md:text-5xl font-black">Featured Projects</h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-yellow-400/30 transition duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="w-full h-56 overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                <h4 className="text-2xl font-bold mb-4 text-white">{project.title}</h4>
                <p className="text-gray-400 leading-7 mb-6">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-3 py-1 rounded-full text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-6">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 font-bold transition">
                  <FaGithub size={20} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 font-bold transition ml-4">
                  <FaExternalLinkAlt size={16} /> Live Preview
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/projects" 
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl font-black hover:bg-white hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(250,204,21,0.2)]"
          >
            Explore All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}