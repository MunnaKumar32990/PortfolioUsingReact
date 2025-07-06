import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { personalData } from "../utils/data";
import { GraduationCap, Medal, BookOpen, Rocket, Lightbulb } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Access education data directly from top-level
  const educationData = personalData.education;

  // Decorative icons for education entries
  const educationIcons = [
    <GraduationCap className="w-6 h-6 text-blue-500" />,
    <BookOpen className="w-6 h-6 text-emerald-500" />,
    <Rocket className="w-6 h-6 text-amber-500" />,
    <Lightbulb className="w-6 h-6 text-purple-500" />,
    <Medal className="w-6 h-6 text-rose-500" />
  ];

  return (
    <section 
      ref={ref} 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 30% 20%, rgba(230, 255, 250, 0.6) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse at 70% 80%, rgba(230, 240, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "cover"
      }}
      id="education"
    >
      {/* Floating decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "linear-gradient(135deg, #10B981, #3B82F6)",
              opacity: 0.05
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1 + Math.random() * 0.3]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzNiODJmNiIgZmlsbC1vcGFjaXR5PSIwLjEiIC8+PC9zdmc+')]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            <GraduationCap className="w-8 h-8 text-emerald-500" />
            <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Education Journey
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            My academic background and learning milestones
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-400 dark:from-emerald-600 dark:to-teal-600 transform -translate-x-1/2 md:translate-x-0"></div>
          
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1 
                } : { 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50, 
                  scale: 0.9 
                }}
                transition={{ 
                  delay: 0.2 + index * 0.15, 
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-6 h-6 bg-white dark:bg-slate-800 rounded-full border-4 border-emerald-400 dark:border-emerald-600 transform -translate-x-1/2 md:translate-x-0 z-10"></div>
                
                {/* Year indicator */}
                <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{edu.year}</span>
                </div>
                
                {/* Education card */}
                <motion.div 
                  className={`flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700/50 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                  whileHover={{ 
                    borderColor: "#06B6D4",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                      {educationIcons[index % educationIcons.length]}
                    </div>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                      {edu.degree || "Education"}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-2">{edu.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{edu.description}</p>
                  
                  {edu.gpa && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/30">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full">
                        <Medal className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-4 text-slate-500 dark:text-slate-500 text-sm">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-emerald-500" />
              Continuous learning and growth
              <Lightbulb className="w-4 h-4 text-emerald-500" />
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;