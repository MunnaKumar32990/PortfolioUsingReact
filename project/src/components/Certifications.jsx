import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { personalData } from '../utils/data';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white dark:bg-slate-800" id="certifications">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                    {cert.date}
                  </p>
                  
                  <motion.a
                    href={cert.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;