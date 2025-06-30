import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Code, Trophy, Zap, ExternalLink } from 'lucide-react';
import { personalData } from '../utils/data';

const CodingPlatforms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const getIcon = (iconName) => {
    const icons = {
      Github,
      Code,
      Trophy,
      Zap
    };
    return icons[iconName] || Code;
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" id="coding-platforms">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Coding Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalData.codingPlatforms.map((platform, index) => {
              const IconComponent = getIcon(platform.icon);
              
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    @{platform.username}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                    {platform.stats}
                  </p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Profile</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingPlatforms;