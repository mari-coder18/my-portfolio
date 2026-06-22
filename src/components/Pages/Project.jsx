import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import FoodDonate from "../../assets/FoodDonate.jpeg";
import BusTracker from "../../assets/BusTracker.jpeg";
import Landingpage from "../../assets/Landingpage.jpeg";
import CustomerManagement from "../../assets/CustomerManagement.jpeg";

function Projects() {
  const projects = [
    {
      title: "Food Donate App",
      image: FoodDonate,
      description: "A full-stack food donation platform with authentication and realtime donation management.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/mari-coder18",
      live: "https://food-donate-gules.vercel.app",
    },
    {
      title: "Customer Management System",
      image: CustomerManagement,
      description: "CRUD-based admin dashboard for managing customer records using MySQL database.",
      tech: ["React", "Node.js", "MySQL"],
      github: "https://github.com/mari-coder18",
      live: "",
    },
    {
      title: "Responsive Landing Page",
      image: Landingpage,
      description: "Modern animated landing page with smooth scrolling and mobile responsiveness.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mari-coder18",
      live: "",
    },
    {
      title: "Bus Tracking app",
      image: BusTracker,
      description: "Bus Tracking Proper timings based on the rural areas routes bus exact location tracking.",
      tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
      github: "https://github.com/mari-coder18",
      live: "",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Subtitle */}
      <div className="text-center pt-20 mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          A collection of real-world applications I've built, reflecting my growth from academic projects to professional work.
        </p>
      </div>

      <div className="relative flex flex-col gap-16 md:gap-32 max-w-6xl mx-auto py-10 px-6">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-400/20 md:-translate-x-1/2 rounded-full z-0"></div>
        
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col pl-14 md:pl-0 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-10 md:gap-16 w-full hover:translate-y-[-10px] transition-transform duration-500`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 top-10 md:top-1/2 w-5 h-5 bg-black border-4 border-cyan-400 rounded-full -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_#22d3ee]"></div>

            {/* Project Image */}
            <div className="w-full md:w-[45%] group relative overflow-hidden rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content Details */}
            <div className="w-full md:w-[45%] flex flex-col justify-center z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Tech Tags with Conditional Highlight */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide border ${
                      project.title === "Food Donate App"
                        ? "bg-yellow-400/10 text-yellow-300 border-yellow-400/20"
                        : "bg-cyan-400/10 text-cyan-300 border-cyan-400/20"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-8">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <FaGithub size={24} /> Code
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-cyan-400 transition-colors duration-300 font-medium">
                    <FiExternalLink size={24} /> Live Demo
                  </a>
                ) : (
                  <span className="text-gray-600 text-lg font-medium cursor-not-allowed">Coming Soon</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;