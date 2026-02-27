import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col lg:flex-row items-center px-6 md:px-20 lg:px-32 pt-10 pb-32 bg-white">
      <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 flex justify-center z-10">
        <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[580px] bg-slate-100 rounded-[100px] overflow-hidden shadow-2xl border-none">
          <img src={profileImg} alt="Phoebe Rael" className="w-full h-full object-cover" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-20 text-center lg:text-left z-10">
        <span className="text-[#2563eb] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Backend Developer & DevOps</span>
        <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">Hi, I'm <br /> <span className="text-[#2563eb]">Phoebe Rael.</span></h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
          A 4th-year Computer Science  student specialized in <span className="font-bold">Spring Boot</span>, Kubernetes, and Angular. Developer of the <span className="text-[#2563eb] font-semibold italic">Masomosoko Marketplace</span>.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          <a href="#works" className="bg-[#2563eb] text-white px-10 py-4 rounded-full font-bold flex items-center gap-4 hover:bg-[#1d4ed8] transition shadow-xl uppercase tracking-widest text-xs">View Works <HiOutlineArrowNarrowRight size={22} /></a>
          <div className="flex gap-4">
            <a href="https://github.com/Phoebe890" target="_blank" className="social-btn"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/phoebe-rael-a58a6724a/" className="social-btn"><FaLinkedin size={22} /></a>
            <a href="https://wa.me/254769053029" target="_blank" className="social-btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white"><FaWhatsapp size={22} /></a>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-slate-50 -z-0"></div>
      <style jsx>{`.social-btn { @apply w-14 h-14 border-2 border-[#2563eb] rounded-full flex items-center justify-center text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-all shadow-sm; }`}</style>
    </section>
  );
};
export default Hero;