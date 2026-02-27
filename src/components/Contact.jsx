import { motion } from "framer-motion";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-28 px-6 md:px-20 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
        <h2 className="text-6xl font-serif mb-4 text-slate-900">Get in Touch</h2>
        <p className="text-slate-400 mb-12 italic">Let's build your next backend system together.</p>
        <form action="https://formspree.io/f/xlgwzzrk" method="POST" className="space-y-10">
          <div className="border-b-2 border-slate-100 py-3 focus-within:border-[#2563eb] transition-colors">
            <label className="block text-[10px] font-black uppercase text-[#2563eb] mb-2 tracking-widest">Name</label>
            <input name="name" type="text" required className="w-full bg-transparent focus:outline-none text-lg" placeholder="Enter Your Name" />
          </div>
          <div className="border-b-2 border-slate-100 py-3 focus-within:border-[#2563eb] transition-colors">
            <label className="block text-[10px] font-black uppercase text-[#2563eb] mb-2 tracking-widest">Email Address</label>
            <input name="email" type="email" required className="w-full bg-transparent focus:outline-none text-lg" placeholder="Enter Your Email" />
          </div>
          <div className="border-b-2 border-slate-100 py-3 focus-within:border-[#2563eb] transition-colors">
            <label className="block text-[10px] font-black uppercase text-[#2563eb] mb-2 tracking-widest">Inquiry Message</label>
            <textarea name="message" rows="3" required className="w-full bg-transparent focus:outline-none text-lg resize-none" placeholder="Details about your project..."></textarea>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button type="submit" className="bg-[#2563eb] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1d4ed8] transition shadow-xl flex items-center justify-center gap-3">Send Message <FaPaperPlane /></button>
            <a href="https://wa.me/254769053029" target="_blank" className="border-2 border-green-500 text-green-500 px-10 py-5 rounded-full font-bold uppercase flex items-center justify-center gap-3">WhatsApp <FaWhatsapp size={22}/></a>
          </div>
        </form>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="hidden lg:flex w-1/2 justify-center">
        <img src="https://plus.unsplash.com/premium_vector-1682303211418-f568fbbe29e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwdXNpbmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" alt="Contact" className="w-[450px] drop-shadow-2xl grayscale-[20%]" />
      </motion.div>
    </div>
  </section>
);
export default Contact;