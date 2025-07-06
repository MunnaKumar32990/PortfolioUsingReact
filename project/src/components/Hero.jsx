import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Code, Terminal, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalData } from '../utils/data';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nameTypewriter = useTypewriter(`${personalData.name}`, 100);
  const roleTypewriter = useTypewriter(`${personalData.role}`, 80, 1800);
  const taglineTypewriter = useTypewriter(`${personalData.tagline}`, 40, 3500);
  
  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  // Function to handle section navigation
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle resume download
  const downloadResume = () => {
    const resumeUrl = "/newResume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "newResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Advanced code snippets for background animation
  const codeSnippets = [
    `const useEffect = (effect, deps) => {\n  // React Hook implementation\n  return effect();\n};`,
    `class ReactComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { advanced: true };\n  }\n\n  render() {\n    return <div>Professional React</div>;\n  }\n}`,
    `const portfolio = {\n  name: "${personalData.name}",\n  role: "${personalData.role}",\n  expertise: ["React", "TypeScript", "Node.js"],\n  level: "Senior"\n};`,
    `import React, { useState, useCallback } from 'react';\n\nconst App = () => {\n  const [state, setState] = useState(null);\n  \n  const memoizedCallback = useCallback(() => {\n    return "Advanced React Patterns";\n  }, []);\n\n  return <Portfolio />;\n};`,
    `interface Developer {\n  name: string;\n  skills: string[];\n  experience: number;\n}\n\nconst developer: Developer = {\n  name: "${personalData.name}",\n  skills: ["React", "TypeScript"],\n  experience: 5\n};`,
    `const useCustomHook = () => {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    fetchData().then(setData);\n  }, []);\n  \n  return { data, loading: !data };\n};`
  ];

  // Professional tech icons with better styling
  const techIcons = [
    { icon: <Code className="w-5 h-5 text-blue-600" />, size: 28 },
    { icon: <Terminal className="w-5 h-5 text-indigo-600" />, size: 32 },
    { icon: <div className="text-purple-600 font-bold text-2xl">⚛</div>, size: 36 },
    { icon: <div className="text-emerald-600 font-mono text-xl font-bold">TS</div>, size: 30 },
    { icon: <div className="text-orange-600 font-mono text-xl font-bold">JS</div>, size: 30 },
    { icon: <div className="text-cyan-600 font-mono text-lg font-bold">{ }</div>, size: 28 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Professional Navigation Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-sm py-3"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">{personalData.initials}</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
              {personalData.name.split(' ')[0]}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ 
                  y: -2,
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-slate-700 font-medium transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-indigo-600" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-sm border-t border-slate-200/50"
          >
            <div className="container mx-auto px-6 py-3 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 rounded-lg text-slate-700 font-medium text-center transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Sophisticated geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 8) % 90}%`,
              top: `${15 + (i * 6) % 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div className={`w-${4 + (i % 3)} h-${4 + (i % 3)} ${
              i % 4 === 0 ? 'bg-blue-200/40 rounded-full' :
              i % 4 === 1 ? 'bg-indigo-200/40 rotate-45' :
              i % 4 === 2 ? 'bg-purple-200/40 rounded-lg' :
              'bg-cyan-200/40 rounded-full'
            } backdrop-blur-sm`} />
          </motion.div>
        ))}

        {/* Professional code snippets background */}
        <div className="absolute inset-0 overflow-hidden opacity-8">
          {[...Array(15)].map((_, i) => {
            const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            const delay = Math.random() * 8;
            const duration = 25 + Math.random() * 25;
            const startPosition = Math.random() * 100;
            
            return (
              <motion.div
                key={i}
                className="absolute font-mono text-xs text-slate-400/30 whitespace-pre leading-relaxed"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${startPosition}%`,
                  width: `${Math.random() * 25 + 20}%`,
                  filter: `blur(${Math.random() * 0.5}px)`,
                }}
                animate={{
                  y: [0, -120],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {snippet}
              </motion.div>
            );
          })}
        </div>
        
        {/* Floating tech icons with professional styling */}
        {techIcons.map((icon, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute"
            style={{
              left: `${8 + (i * 12) % 85}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-200/50"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {icon.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Professional profile container with advanced styling */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { 
                delay: 0.2, 
                type: "spring", 
                stiffness: 120,
                damping: 12
              }
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              y: -5
            }}
            className="w-52 h-52 mx-auto mb-12 relative group"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
            
            {/* Main container */}
            <div className="relative w-full h-full bg-gradient-to-br from-white to-slate-50 rounded-3xl p-2 shadow-2xl border border-slate-200/50 backdrop-blur-sm">
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="w-full h-full rounded-2xl object-cover"
              />
              
              {/* Professional orbiting elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 shadow-xl z-10 border-2 border-white"
                animate={{ 
                  rotate: 360,
                  x: ["0%", "180%", "180%", "0%", "0%"],
                  y: ["0%", "0%", "180%", "180%", "0%"],
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code className="w-5 h-5 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-3 shadow-xl z-10 border-2 border-white"
                animate={{ 
                  rotate: -360,
                  x: ["0%", "-180%", "-180%", "0%", "0%"],
                  y: ["0%", "0%", "180%", "180%", "0%"],
                }}
                transition={{ 
                  duration: 14, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Terminal className="w-5 h-5 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl p-3 shadow-xl border-2 border-white"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="text-white font-bold text-lg">⚛</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional terminal-style name display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="min-h-[1.2em]"
          >
            <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-3 rounded-t-2xl border-b-2 border-blue-500 shadow-lg">
              <span className="flex items-center text-blue-400 text-sm font-medium">
                <Terminal className="w-4 h-4 mr-2" />
                <span className="text-slate-300">senior-developer</span>
                <span className="text-green-400 ml-2">●</span>
              </span>
            </div>
            <motion.div
              className="text-left bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl rounded-tl-none px-10 py-8 inline-block shadow-2xl border border-slate-700"
            >
              <div className="flex items-start mb-3">
                <span className="text-emerald-400 mr-3 font-mono text-lg">❯</span>
                <motion.h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  {nameTypewriter}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-cyan-400 ml-2"
                  >
                    ▊
                  </motion.span>
                </motion.h1>
              </div>
              
              <div className="flex items-start mb-3">
                <span className="text-emerald-400 mr-3 mt-2 font-mono text-lg">❯</span>
                <motion.h2 className="text-3xl md:text-4xl text-blue-300 font-mono font-medium">
                  {roleTypewriter}
                </motion.h2>
              </div>
              
              <div className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1 font-mono text-lg">❯</span>
                <motion.p className="text-lg text-slate-300 opacity-90 leading-relaxed">
                  {taglineTypewriter}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional CTA buttons with advanced interactions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, staggerChildren: 0.15 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              onClick={downloadResume}
              className="relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group border border-blue-500/20"
            >
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Download className="w-6 h-6" />
              </motion.span>
              <span className="text-lg">Download Resume</span>
              <motion.span
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.span>
              
              {/* Professional sparkle animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: "25%",
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.4,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 bg-white/90 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold border-2 border-slate-200 hover:border-blue-300 transition-all flex items-center gap-3 group shadow-lg hover:shadow-xl"
            >
              <motion.span
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="w-6 h-6" />
              </motion.span>
              <span className="text-lg">Get In Touch</span>
              <motion.span
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                ↗
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Professional scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <motion.div
                className="w-12 h-20 rounded-full border-3 border-slate-300 flex items-start justify-center p-3 bg-white/50 backdrop-blur-sm shadow-lg"
                animate={{
                  borderColor: ["rgba(148, 163, 184, 0.5)", "rgba(59, 130, 246, 0.8)", "rgba(148, 163, 184, 0.5)"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <motion.div
                  animate={{ y: [0, 12] }}
                  transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                />
              </motion.div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-slate-500 font-medium flex flex-col items-center">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  Explore
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Professional floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 pointer-events-none backdrop-blur-sm"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120],
            x: [0, Math.random() * 60 - 30],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12 + Math.random() * 15,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;