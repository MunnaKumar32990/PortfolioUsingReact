import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalData } from '../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalData.name}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {personalData.tagline}
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>{personalData.location}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['About', 'Projects', 'Education','Skills', 'Certifications', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personalData.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {personalData.email}
              </motion.a>
              <motion.a
                href={`tel:${personalData.phone}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {personalData.phone}
              </motion.a>
              <motion.a
                href="https://github.com/munnakumar32990"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by {personalData.name} © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;