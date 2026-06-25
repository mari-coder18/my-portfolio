import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          mx-auto
          max-w-5xl
          rounded-[40px]
          border
          border-cyan-400/20
          bg-gradient-to-r
          from-cyan-500/10
          to-yellow-400/10
          px-8
          py-16
          text-center
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(34,211,238,0.08)]
        "
      >

        {/* Small Tag */}
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Let’s Connect
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          Let’s Build Something
          <span className="block text-cyan-400">
            Amazing Together
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-8 text-gray-300">
          I’m available for internships, freelance projects
          and full stack development opportunities.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* Hire Me */}
          <a
            href="/Marimuthu-Resume.pdf"
            download
            className="
              rounded-2xl
              bg-cyan-400
              px-8
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white
              shadow-[0_0_40px_rgba(34,211,238,0.35)]
            "
          >
           Download Resume
          </a>

          {/* Contact */}
          <Link
            to="/contact"
            className="
              rounded-2xl
              border
              border-cyan-400
              px-8
              py-4
              font-bold
              text-cyan-400
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-400
              hover:text-black
            "
          >
            Contact Me
          </Link>

        </div>

      </motion.div>
    </section>
  );
}

export default CTASection;