import { motion } from "framer-motion";

import jaz from "../../assets/Certificates/jaz.png";
import Oracle from "../../assets/Certificates/Oracle.png";

function Certifications() {

  const certifications = [
    {
      title: "Full Stack Development",
      company: "Jaz Infotech",
      year: "2026",
      image: jaz,

      description:
        "Completed full stack web development training using React, Node.js, Express and MySQL.",

      pdf: "/jaz certificate.pdf",
    },

    {
      title: "Oracle Cloud Infrastructure",
      company: "Oracle",
      year: "2025",
      image: Oracle,

      description:
        "Learned cloud infrastructure fundamentals, deployment concepts and modern cloud technologies.",

      pdf: "/oracle certificate.pdf",
    },
  ];

  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">

      {/* Heading */}
      <div className="text-center mb-16">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-3">
          Achievements
        </p>

        <h2 className="text-4xl md:text-6xl font-black">
          Certifications
        </h2>

      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">

        {certifications.map((cert, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:-translate-y-2
              hover:border-cyan-400/40
              transition-all
              duration-300
              shadow-xl
            "
          >

            {/* Certificate Image */}
            <div className="overflow-hidden">

              <img
                src={cert.image}
                alt={cert.title}
                className="
                  w-full
                  h-60
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-105
                "
              />

            </div>

            {/* Content */}
            <div className="p-8">

              {/* Title + Year */}
              <div className="flex items-center justify-between mb-4">

                <h3 className="text-2xl font-bold">
                  {cert.title}
                </h3>

                <span className="text-cyan-400 font-semibold">
                  {cert.year}
                </span>

              </div>

              {/* Company */}
              <p className="text-yellow-400 font-medium mb-4">
                {cert.company}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {cert.description}
              </p>

              {/* Button */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-6
                  rounded-xl
                  border
                  border-cyan-400
                  px-6
                  py-3
                  font-semibold
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:text-black
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                "
              >
                View Certificate
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;