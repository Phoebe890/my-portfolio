import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 md:px-20 py-6 border-b border-slate-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-[#2563eb] lowercase tracking-tighter">phoebe<span className="text-slate-300">.</span></div>
        <ul className="hidden md:flex space-x-12">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-slate-500 font-medium hover:text-[#2563eb] transition-colors uppercase text-[10px] tracking-widest">{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-3xl text-[#2563eb]" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <HiX /> : <HiMenuAlt3 />}</button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden py-10 flex flex-col items-center space-y-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-800">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;