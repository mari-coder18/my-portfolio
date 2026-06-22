import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";

const skillsData = {
  "Frontend": [
    { name: "HTML", desc: "Semantic markup & structure", icon: <FaHtml5 /> },
    { name: "CSS", desc: "Styling, layouts & animations", icon: <FaCss3Alt /> },
    { name: "JavaScript", desc: "Dynamic & interactive logic", icon: <IoLogoJavascript /> },
    { name: "Tailwind CSS", desc: "Utility-first UI styling", icon: <RiTailwindCssFill /> },
    { name: "React", desc: "Component-based UI development", icon: <FaReact /> },
  ],
  "Backend & Database": [
    { name: "Node.js", desc: "Server-side JS runtime", icon: <FaNodeJs /> },
    { name: "Express.js", desc: "Fast backend framework", icon: <SiExpress /> },
    { name: "MySQL", desc: "Relational database design", icon: <SiMysql /> },
  ],
  "Tools": [
    { name: "Git", desc: "Version control system", icon: <FaGitAlt /> },
    { name: "GitHub", desc: "Code collaboration & hosting", icon: <FaGithub /> },
  ]
};

function Skills() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-semibold text-lg">My Skills</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-extrabold">Technologies I Work With</h2>
        <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl">
          A collection of tools and technologies I use to build modern, scalable web applications.
        </p>

        <div className="mt-16 space-y-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              {/* Category Header */}
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-400 pl-4">
                {category}
              </h3>
              
              {/* Skill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group rounded-3xl border border-cyan-400/20 bg-slate-900/90 p-8 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-cyan-400 text-5xl mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div className="font-bold text-lg">{skill.name}</div>
                    <div className="text-slate-400 mt-2 text-sm">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;