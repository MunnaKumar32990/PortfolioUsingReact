import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalData } from '../utils/data';

// Skill category images
const categoryImages = {
  frontend: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
  backend: "https://cdn-icons-png.flaticon.com/512/2721/2721287.png",
  tools: "https://cdn-icons-png.flaticon.com/512/3067/3067585.png",
  design: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
  database: "https://cdn-icons-png.flaticon.com/512/4299/4299856.png",
  devops: "https://cdn-icons-png.flaticon.com/512/4299/4299904.png"
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Skill icons mapping
  const skillIcons = {
    React: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    JavaScript: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    TypeScript: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    HTML: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    CSS: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    Tailwind: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    Node: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    Python: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    Java: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    MongoDB: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    MySQL: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
    PostgreSQL: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    Git: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    Docker: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    AWS: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    Figma: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
    Photoshop: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg"
  };

  const SkillBar = ({ skill, index, categoryDelay }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: categoryDelay + index * 0.1, type: "spring", stiffness: 100 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-800 dark:text-slate-200 font-medium flex items-center gap-2">
          {skillIcons[skill.name] ? (
            <img 
              src={skillIcons[skill.name]} 
              alt={skill.name} 
              className="w-5 h-5 object-contain"
            />
          ) : null}
          {skill.name}
        </span>
        <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ 
            delay: categoryDelay + index * 0.1 + 0.3, 
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full relative"
        />
      </div>
    </motion.div>
  );

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 10% 20%, rgba(255, 240, 219, 0.3) 0%, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 90% 80%, rgba(255, 229, 210, 0.3) 0%, rgba(255, 255, 255, 0) 30%)",
        backgroundSize: "cover"
      }}
      id="skills"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "linear-gradient(135deg, #F59E0B, #F97316)"
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1 + Math.random() * 0.3]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
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
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
              <span className="block mt-3 text-base font-normal text-amber-600 max-w-md mx-auto">
                My technical proficiency across various domains
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Continuously expanding my skill set to deliver high-quality solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(personalData.skills).map(([category, skills], categoryIndex) => {
              const categoryDelay = 0.2 + categoryIndex * 0.1;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ delay: categoryDelay, duration: 0.5, ease: "backOut" }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-amber-100 dark:border-amber-900/50"
                >
                  <div className="flex items-center mb-6">
                    {categoryImages[category] ? (
                      <div className="w-16 h-16 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center p-2 mr-4">
                        <img 
                          src={categoryImages[category]} 
                          alt={category} 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    ) : null}
                    <h3 className="text-2xl font-semibold text-amber-700 dark:text-amber-400 capitalize">
                      {category}
                    </h3>
                  </div>
                  
                  {skills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                      categoryDelay={categoryDelay + 0.2} 
                    />
                  ))}
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-4 text-slate-500 dark:text-slate-500 text-sm">
              <div className="w-16 h-px bg-amber-300 dark:bg-amber-700/50"></div>
              <span>Always learning and expanding my skillset</span>
              <div className="w-16 h-px bg-amber-300 dark:bg-amber-700/50"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;