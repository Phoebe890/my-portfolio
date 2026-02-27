import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const Journey = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Giktek Software Solutions",
      location: "Nairobi, Kenya",
      period: "May 2025 - Aug 2025",
      skills: ["Spring Boot", "Angular", "Ionic", "Kubernetes", "Grafana"],
      desc: "Developed enterprise backends with Spring Boot and dynamic frontends in Angular. Spearheaded DevOps initiatives by setting up Kubernetes clusters on Ubuntu servers and configuring Grafana for real-time monitoring. Built cross-platform mobile apps using Ionic."
    },
    {
      title: "Industrial Training",
      company: "Masinde Muliro University (MMUST)",
      location: "Kakamega, Kenya",
      period: "May 2024 - July 2024",
      skills: ["Mobile Dev", "Web Dev", "Networking"],
      desc: "Gained intensive training in mobile and website development within an institutional framework. Managed network configurations and implemented networking protocols to ensure campus-wide system connectivity."
    },
    {
      title: "Fullstack Developer (Freelance)",
      company: "Masomosoko Marketplace",
      location: "Remote",
      period: "2023 - Present",
      skills: ["Spring Boot", "MySQL", "React"],
      desc: "Architected a specialized educational marketplace for CBC & CBE materials. Implemented core business logic allowing teachers to upload learning materials and students to securely purchase them using Spring Boot and MySQL."
    }
  ];

  return (
    <section id="journey" className="py-28 px-6 md:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-serif text-slate-900 mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* 1. PROFESSIONAL EXPERIENCE (Left Side) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <FaBriefcase className="text-[#2563eb]" size={28} />
              <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Experience</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-3 pl-8 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#2563eb] rounded-full border-4 border-white shadow-md"></div>
                  
                  <div className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-[10px] font-black text-[#2563eb] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                      {exp.period}
                    </span>
                    <h4 className="text-2xl font-bold text-slate-900">{exp.title}</h4>
                    <p className="text-[#2563eb] font-semibold mb-3">{exp.company} • {exp.location}</p>
                    
                    {/* Restored Detailed Description */}
                    <p className="text-slate-600 leading-relaxed mb-6 italic text-sm border-l-2 border-slate-100 pl-4">
                      {exp.desc}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="flex items-center gap-1 text-[10px] font-bold bg-slate-50 text-slate-500 px-3 py-1 rounded-lg">
                          <FaCheckCircle className="text-[#2563eb]" /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. EDUCATION (Right Side) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <FaGraduationCap className="text-[#2563eb]" size={32} />
              <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Education</h3>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black text-[#2563eb] uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full mb-5 inline-block">
                  2022 - 2025
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">B.Sc. Computer Science</h4>
                <p className="text-[#2563eb] font-medium mb-8">Masinde Muliro University of Science and Technology</p>
                
                <h5 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Key Focus Areas</h5>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3"><FaCheckCircle className="text-blue-200 mt-1 shrink-0" /> Distributed Systems</li>
                  <li className="flex gap-3"><FaCheckCircle className="text-blue-200 mt-1 shrink-0" /> Backend Architecture</li>
                  <li className="flex gap-3"><FaCheckCircle className="text-blue-200 mt-1 shrink-0" /> Network Security</li>
                  <li className="flex gap-3"><FaCheckCircle className="text-blue-200 mt-1 shrink-0" /> Cloud Computing</li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;