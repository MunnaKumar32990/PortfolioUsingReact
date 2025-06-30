import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalData } from '../utils/data';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const SkillBar = ({ skill, index, categoryDelay }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: categoryDelay + index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: categoryDelay + index * 0.1 + 0.5, duration: 1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8 text-center">
                Frontend
              </h3>
              {personalData.skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} categoryDelay={0.3} />
              ))}
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8 text-center">
                Backend
              </h3>
              {personalData.skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} categoryDelay={0.5} />
              ))}
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8 text-center">
                Tools & Others
              </h3>
              {personalData.skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} categoryDelay={0.7} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;