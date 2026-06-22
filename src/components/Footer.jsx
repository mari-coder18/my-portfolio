import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-black text-white shadow-[0_-10px_60px_rgba(34,211,238,0.05)]">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:md:-translate-y-2 transition-all duration-300">
            <h1 className="text-3xl font-bold mb-3">Mari <span className="text-cyan-400">Muthu</span></h1>
            <p className="text-cyan-400 text-sm mb-4">Crafting modern web experiences.</p>
            <p className="text-gray-400 leading-7">Full Stack Developer passionate about building modern, responsive and user-friendly web applications.</p>
          </div>

          {/* Quick Links */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:md:-translate-y-2 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="inline-block text-gray-400 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:md:-translate-y-2 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6">Contact Info</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <p className="text-gray-400">Tirunelveli, Tamil Nadu</p>
              </div>
              <a href="mailto:mrmari450@gmail.com" className="flex items-center gap-3 group">
                <FaEnvelope className="text-cyan-400" />
                <p className="text-gray-400 group-hover:text-cyan-400 transition-colors break-all">mrmari450@gmail.com</p>
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:md:-translate-y-2 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6">Connect</h2>
            <div className="flex gap-4">
              <a href="https://github.com/mari-coder18" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 p-4 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-300">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/marimuthu-u" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 p-4 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-300">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 MariMuthu • Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}