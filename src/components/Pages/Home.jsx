import { motion } from "framer-motion";

import profile from "../../assets/profile3.png";
import bgImage from "../../assets/developer-bg.png";

import {
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import CTASection from "../CTASection"; 
import AboutSection from "../AboutSection";
import FeaturedProjects from "../FeauteredProjects";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-black text-white pt-24 pb-20"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute right-10 top-28 h-72 w-72 rounded-full bg-yellow-400/20 blur-[120px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400"
            >
              Welcome to My Portfolio
            </motion.p>

            <motion.h1
              initial={{ y: 70, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight"
            >
              Hi, I’m <br />

              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Marimuthu
              </span>
            </motion.h1>

            <motion.h2
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-5 text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400"
            >
              Full Stack Developer | Scalable Web Solutions 
            </motion.h2>

            <motion.p
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mx-auto lg:mx-0 mt-6 max-w-xl text-gray-300 leading-8 text-base md:text-lg"
            >
              I build modern, responsive and scalable web
              applications using React, Tailwind CSS,
              Node.js, Express and MySQL.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              {["React", "Tailwind", "Node.js", "Express", "MySQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-yellow-400
                      bg-black
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-gray-200
                      backdrop-blur
                      transition
                      duration-200
                      hover:scale-105
                      hover:bg-yellow-400
                      hover:text-black
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Link
                to="/projects"
                className="
                  w-[85%]
                  sm:w-auto
                  mx-auto
                  text-center
                  rounded-xl
                  bg-yellow-400
                  px-6
                  py-3
                  sm:px-8
                  sm:py-4
                  font-bold
                  text-black
                  shadow-[0_0_40px_rgba(250,204,21,0.45)]
                  transition
                  hover:scale-105
                  hover:bg-white
                "
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="
                  w-[85%]
                  sm:w-auto
                  mx-auto
                  text-center
                  rounded-xl
                  border
                  border-yellow-400
                  px-6
                  py-3
                  sm:px-8
                  sm:py-4
                  font-bold
                  text-yellow-400
                  transition
                  hover:scale-105
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                Contact Me
              </Link>

              <a
                href="/Marimuthu-Resume.pdf"
                download
                className="
                  w-[85%]
                  sm:w-auto
                  mx-auto
                  text-center
                  rounded-xl
                  border
                  border-yellow-400
                  px-6
                  py-3
                  sm:px-8
                  sm:py-4
                  font-bold
                  text-yellow-400
                  transition
                  hover:scale-105
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                Hire Me
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 flex justify-center gap-6 lg:justify-start"
            >
              <a
                href="https://github.com/mari-coder18"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  p-5
                  text-2xl
                  text-white
                  backdrop-blur
                  transition
                  hover:scale-110
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                <FaGithub />
              </a>

              <a
                href=" https://www.linkedin.com/in/marimuthu-u"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  p-5
                  text-2xl
                  text-white
                  backdrop-blur
                  transition
                  hover:scale-110
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.85 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-yellow-400/20 blur-3xl" />

              <div className="relative h-64 w-64 md:h-[380px] md:w-[380px] overflow-hidden rounded-full border-4 border-yellow-400 shadow-[0_0_90px_rgba(250,204,21,0.35)]">
                <img
                  src={profile}
                  alt="Marimuthu"
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.span
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="
                  absolute
                  -left-4
                  top-20
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-sm
                  backdrop-blur
                "
              >
                React
              </motion.span>

              <motion.span
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="
                  absolute
                  -right-4
                  bottom-20
                  rounded-full
                  bg-yellow-400
                  px-5
                  py-2
                  text-sm
                  font-bold
                  text-black
                "
              >
                Node.js
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      
      <AboutSection/>
      <FeaturedProjects/>
      <CTASection/>
      
    </>
  );
}

export default Home;