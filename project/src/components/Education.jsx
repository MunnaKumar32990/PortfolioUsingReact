import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { personalData } from "../utils/data"; // Adjust import path as needed

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Access education data directly from top-level
  const educationData = personalData.education;

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                delay: 0.2 + index * 0.1, 
                duration: 0.5 
              }}
              className="relative pl-10 border-l-2 border-green-400 dark:border-green-600"
            >
              <div className="absolute -left-[13px] top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-900"></div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100">{edu.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;