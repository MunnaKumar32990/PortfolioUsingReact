import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, BadgeCheck, BookOpen, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { personalData } from '../utils/data';

const Certifications = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const isContainerInView = useInView(containerRef, { once: true, threshold: 0.1 });

  // Decorative icons for certifications
  const certificationIcons = {
    development: <BookOpen className="w-6 h-6 text-blue-500" />,
    security: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
      </svg>
    ),
    default: <BadgeCheck className="w-6 h-6 text-purple-500" />
  };

  // Safely handle undefined category
  const getCategoryIcon = (category) => {
    if (!category || typeof category !== 'string') {
      return certificationIcons.default;
    }
    return certificationIcons[category.toLowerCase()] || certificationIcons.default;
  };

  // Category colors for badges
  const getCategoryColor = (category) => {
    switch((category || '').toLowerCase()) {
      case 'development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'security': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'cloud': return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300';
      default: return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    }
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 20% 20%, rgba(255, 245, 230, 0.6) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse at 80% 80%, rgba(230, 240, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "cover"
      }}
      id="certifications"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] opacity-20">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="a" r="50%" cx="0" cy="0">
                <stop offset="0%" stopColor="#FF9E0B" />
                <stop offset="100%" stopColor="#3B82F6" />
              </radialGradient>
            </defs>
            <g transform="translate(0,0)">
              <motion.path 
                d="M546,396Q464,542,366,495Q268,448,226,349Q184,250,277,180Q370,110,464,180Q558,250,546,396Z"
                fill="url(#a)"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "#F59E0B",
              opacity: Math.random() * 0.4 + 0.1
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 40 - 20],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Star className="w-5 h-5 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My Certifications
              <span className="block mt-4 text-lg font-normal text-amber-600 max-w-md mx-auto">
                Validated expertise and continuous learning
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Professional certifications demonstrating my skills and knowledge across various domains
            </motion.p>
          </div>

          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {personalData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.95, rotate: -1 }}
                animate={isContainerInView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotate: 0
                } : { 
                  opacity: 0, 
                  y: 30, 
                  scale: 0.95,
                  rotate: -1
                }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1],
                  rotate: { type: "spring", stiffness: 300 }
                }}
                whileHover={{ 
                  y: -10,
                  rotate: 0.5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 dark:border-slate-700/50"
              >
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent dark:from-black/10 pointer-events-none z-10"></div>
                
                {/* Ribbon for category */}
                <div className={`absolute top-4 -right-10 w-40 text-center py-1 rotate-45 z-20 ${getCategoryColor(cert.category)} text-xs font-semibold`}>
                  {cert.category || "Certification"}
                </div>
                
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-md">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(cert.category)}
                      <span className="text-xs font-medium text-white px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700/50 dark:text-slate-300 px-2.5 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 line-clamp-2 min-h-[40px]">
                    {cert.description}
                  </p>
                  
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-between w-full py-3 px-4 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-amber-700 dark:text-amber-300 font-medium rounded-lg transition-all group/link border border-amber-100 dark:border-slate-700"
                  >
                    <span>View Certificate</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-4 text-slate-500 dark:text-slate-500 text-sm">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                Continuously learning and expanding my expertise
                <Star className="w-4 h-4 text-amber-500" />
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;