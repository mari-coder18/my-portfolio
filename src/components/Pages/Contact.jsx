import bgimage from "../../assets/apj.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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
        (error) => {
          toast.error("Failed to Send ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover">
      {/* Main Container */}
      <div
        className="w-full min-h-screen overflow-hidden relative bg-cover bg-center shadow-2xl flex items-center justify-end"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        {/* Form Container */}
        <div className="relative z-10 w-full flex justify-center lg:justify-end items-center px-4 md:px-10 py-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-xl rounded-[30px] bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-2xl space-y-5 lg:mr-10"
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Feel free to contact me for internships, freelance projects, or developer opportunities.
              </p>
            </div>

            {/* Inputs */}
            <input type="text" name="name" placeholder="Your Name" className="w-full px-5 py-4 rounded-2xl bg-slate-950/80 border border-slate-700 text-white placeholder:text-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition" required />
            
            <input type="email" name="email" placeholder="Your Email" className="w-full px-5 py-4 rounded-2xl bg-slate-950/80 border border-slate-700 text-white placeholder:text-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition" required />
            
            <input type="text" name="subject" placeholder="Subject" className="w-full px-5 py-4 rounded-2xl bg-slate-950/80 border border-slate-700 text-white placeholder:text-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition" required />

            <textarea name="message" rows="5" placeholder="Your Message" className="w-full px-5 py-4 rounded-2xl bg-slate-950/80 border border-slate-700 text-white placeholder:text-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition resize-none" required></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-bold transition ${loading ? "bg-slate-700 text-slate-400 cursor-not-allowed" : "bg-orange-500 text-white hover:bg-orange-400 hover:scale-[1.02]"}`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;