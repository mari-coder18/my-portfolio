import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import MissleMan from "../../assets/MissleMan.png";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_zabvdhi",
        "template_6egzp0g",
        form.current,
        "pNIlSbtRsDufQyMVg"
      )
      .then(
        () => {

          toast.success("Message Sent Successfully ✅");

          form.current.reset();

          setLoading(false);

        },
        () => {

          toast.error("Failed to Send ❌");

          setLoading(false);

        }
      );
  };

  return (

    <section
      className="
      relative
      min-h-screen
      bg-cover
      bg-center
      overflow-hidden
      text-white
      "
      style={{
        backgroundImage: `url(${MissleMan})`,
      }}
    >

    
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      <Toaster />

    
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-20
        "
      >

        
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_1.1fr]
          gap-14
          items-center
          min-h-screen
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p
              className="
              text-orange-500
              uppercase
              tracking-widest
              mb-4
              font-semibold
              "
            >
              Let's Connect —
            </p>

            <div className="w-20 h-[2px] bg-orange-500 mb-6"></div>

            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              mb-8
              "
            >
              I’d Love to hear from{" "}
              <span className="text-orange-400">
                You.
              </span>
            </h2>

            
            <div className="mt-10 text-gray-300">

              <p className="text-orange-500 text-5xl mb-4">
                ❝
              </p>

              <p className="text-lg leading-9">

                Dream, Dream, Dream.
                Dreams transform into thoughts
                and thoughts result in action.

              </p>

              <p className="mt-5 font-semibold text-orange-400">
                — APJ Abdul Kalam
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-12">

              {/* GITHUB */}
              <a
                href="https://github.com/mari-coder18"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-14
                h-14
                rounded-xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-2xl
                hover:bg-orange-500
                hover:scale-110
                hover:shadow-lg
                hover:shadow-orange-500/30
                transition-all
                duration-300
                "
              >
                <FaGithub />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/marimuthu-u"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-14
                h-14
                rounded-xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-2xl
                hover:bg-orange-500
                hover:scale-110
                hover:shadow-lg
                hover:shadow-orange-500/30
                transition-all
                duration-300
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            shadow-2xl
            "
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >

              
              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
                  w-full
                  bg-transparent
                  border
                  border-white/20
                  rounded-xl
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-400
                  outline-none
                  focus:border-orange-400
                  transition-all
                  duration-300
                  "
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="
                  w-full
                  bg-transparent
                  border
                  border-white/20
                  rounded-xl
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-400
                  outline-none
                  focus:border-orange-400
                  transition-all
                  duration-300
                  "
                />

              </div>

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="
                w-full
                bg-transparent
                border
                border-white/20
                rounded-xl
                px-5
                py-4
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-orange-400
                transition-all
                duration-300
                "
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="
                w-full
                bg-transparent
                border
                border-white/20
                rounded-xl
                px-5
                py-4
                text-white
                placeholder:text-gray-400
                outline-none
                resize-none
                focus:border-orange-400
                transition-all
                duration-300
                "
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-gradient-to-r
                from-orange-600
                to-orange-400
                p-4
                rounded-xl
                font-bold
                cursor-pointer
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
                hover:shadow-orange-500/30
                disabled:opacity-70
                "
              >

                {loading ? "Sending..." : "Send Message"}

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>

  );
}

export default Contact;