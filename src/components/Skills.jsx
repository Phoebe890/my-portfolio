import { motion } from "framer-motion";
import { 
  FaJava, FaTerminal, FaAngular, FaJsSquare, 
  FaPython, FaCode, FaHtml5, FaCss3Alt 
} from "react-icons/fa"; 
import { SiSpringboot, SiKubernetes, SiCplusplus } from "react-icons/si";

const skillGroups = [
  { 
    title: "Backend Systems", 
    mainIcon: <FaJava size={50}/>, 
    languages: ["Java", "Spring Boot", "C#", "Python"], 
    desc: "Architecting secure REST APIs and microservices with robust server-side logic." 
  },
  { 
    title: "Systems & DevOps", 
    mainIcon: <FaTerminal size={50}/>, 
    languages: ["C", "C++", "Linux", "Kubernetes"], 
    desc: "Experienced in low-level memory management and cloud orchestration with K8s." 
  },
  { 
    title: "Frontend & Mobile", 
    mainIcon: <FaAngular size={50}/>, 
    languages: ["Angular", "React", "Ionic", "TS"], 
    desc: "Developing high-performance SPAs and cross-platform mobile apps." 
  },
  { 
    title: "Web Core", 
    mainIcon: <FaJsSquare size={50}/>, 
    languages: ["HTML5", "CSS3", "JavaScript"], 
    desc: "Solid foundation in responsive web design, DOM manipulation, and scripting." 
  }
];

const Skills = () => (
  <section id="skills" className="py-28 px-6 md:px-20 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-6xl md:text-7xl font-serif text-center mb-24 text-slate-900"
      >
        Technical Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((g, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }} 
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-[#2563eb] p-10 rounded-[50px] text-white flex flex-col items-center shadow-xl transition-all duration-300"
          >
            <div className="mb-6 bg-white/10 p-5 rounded-3xl">
              {g.mainIcon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">{g.title}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {g.languages.map(l => (
                <span key={l} className="text-[9px] font-black bg-white/20 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {l}
                </span>
              ))}
            </div>
            <p className="text-xs opacity-80 text-center font-light leading-relaxed">
              {g.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;