import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaLock, FaEnvelope } from "react-icons/fa";


import masomoImg from "../assets/masomo.png";
import kycImg from "../assets/kyc.png";

const projects = [
  {
    title: "Masomosoko Marketplace",
    category: "EDTECH • FULLSTACK",
    image: masomoImg,
    link: "https://masomosoko.co.ke",
    desc: "A marketplace for CBC & CBE materials. Teachers upload content and students purchase via a secure Spring Boot backend."
  },
  {
    title: "DevOps K8s Infrastructure",
    category: "INFRASTRUCTURE • DEVOPS",
    image: "https://logit.io/uploads/general/2LXMkzuZXCx3MPJk8VngjA_servermonitoring__1_.png", // Using an external image for Kubernetes
    link: "https://github.com/Phoebe890",
    desc: "Kubernetes orchestration on Ubuntu with Grafana monitoring. Managed microservice scaling and cluster health observability."
  },
  {
    title: "KYC Verification System",
    category: "BACKEND • SECURITY",
    image: kycImg, 
    link: "https://github.com/Phoebe890",
    desc: "Secure user verification system that validates identity and triggers automated confirmation emails using Spring Boot Mail API."
  }
];

const Works = () => {
  return (
    <section id="works" className="py-28 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 mb-4">Selected Works</h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full group"
            >
              {/* Image Box */}
              <div className="relative h-[320px] overflow-hidden rounded-t-[50px] shadow-lg border border-slate-50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white p-4 rounded-full text-[#2563eb] hover:scale-110 transition shadow-xl"
                   >
                      <FaExternalLinkAlt size={22} />
                   </a>
                </div>
              </div>

              {/* Description Box (Tech Blue) */}
              <div className="bg-[#2563eb] p-10 rounded-b-[50px] text-white flex-grow shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black tracking-[0.3em] opacity-90 uppercase">
                    {project.category}
                  </p>
                  {/* Icon change based on project type */}
                  {project.title.includes("KYC") ? <FaEnvelope className="text-blue-200" /> : <FaLock className="text-blue-200" />}
                </div>
                
                <h3 className="text-3xl font-serif mb-4 leading-tight italic">
                  {project.title}
                </h3>
                
                <p className="text-sm opacity-80 leading-relaxed font-light">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;