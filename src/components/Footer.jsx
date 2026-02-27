import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-slate-50 py-24 px-6 md:px-20 border-t border-slate-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="text-5xl font-serif text-[#2563eb] leading-tight mb-8">Let's create something great</h2>
        <div className="flex gap-8">
          <a href="#" className="footer-link"><FaFacebookF size={22} /></a>
          <a href="https://github.com/Phoebe890" target="_blank" className="footer-link"><FaXTwitter size={22} /></a>
          <a href="#" className="footer-link"><FaInstagram size={22} /></a>
        </div>
      </motion.div>
      <div className="text-left md:text-right">
        <h3 className="text-3xl font-serif text-[#2563eb] mb-4">Contact</h3>
        <a href="mailto:phoebemuriithi608@gmail.com" className="text-[#2563eb] font-bold text-xl md:text-2xl hover:underline transition-all">phoebemuriithi608@gmail.com</a>
      </div>
    </div>
    <style jsx>{`.footer-link { @apply text-slate-300 hover:text-[#2563eb] transition-all duration-300; }`}</style>
  </footer>
);
export default Footer;