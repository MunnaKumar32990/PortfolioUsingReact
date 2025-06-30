import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Code, Terminal } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalData } from '../utils/data';

const Hero = () => {
  const typewriterText = useTypewriter(`${personalData.name}`, 150);
  
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

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Code snippets for background animation
  const codeSnippets = [
    `function helloWorld() {\n  console.log("Hello, World!");\n}`,
    `class Developer {\n  constructor(name) {\n    this.name = name;\n  }\n\n  code() {\n    return "Creating awesome apps!";\n  }\n}`,
    `const portfolio = {\n  name: "${personalData.name}",\n  role: "${personalData.role}",\n  skills: ["React", "Node.js", "JavaScript"]\n};`,
    `import React from 'react';\n\nexport default function App() {\n  return <h1>Welcome to my Portfolio</h1>;\n}`,
    `#include <stdio.h>\n\nint main() {\n  printf("Hello from C!");\n  return 0;\n}`,
    `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b`
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Developer-themed background - Moving code snippets */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(25)].map((_, i) => {
          const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          const delay = Math.random() * 10;
          const duration = 40 + Math.random() * 40;
          const startPosition = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute font-mono text-xs text-green-400/50 whitespace-pre"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${startPosition}%`,
                width: `${Math.random() * 30 + 20}%`,
                filter: `blur(${Math.random() * 2}px)`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.7, 0],
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
        
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHBhdGggZD0iTTAgMEg1MFY1MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzYzZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIi8+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzAwM2M2ZiIvPgogIDxjaXJjbGUgY3g9IjQwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiMwMDNjNmYiLz4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjQwIiByPSIxIiBmaWxsPSIjMDAzYzZmIi8+CiAgPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMSIgZmlsbD0iIzAwM2M2ZiIvPgo8L3N2Zz4=')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Developer-themed profile container */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { 
                delay: 0.2, 
                type: "spring", 
                stiffness: 100,
                damping: 10
              }
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 30px rgba(0, 200, 255, 0.5)"
            }}
            className="w-44 h-44 mx-auto mb-8 relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-slate-900" />
            <img
              src={personalData.profileImage}
              alt={personalData.name}
              className="relative w-full h-full rounded-2xl object-cover border-2 border-blue-500/50"
            />
            <motion.div 
              className="absolute -bottom-3 -right-3 bg-blue-600 rounded-full p-2 shadow-lg"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Name with Terminal-like Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="min-h-[1.2em]"
          >
            <div className="inline-block bg-slate-800 px-4 py-2 rounded-t-lg border-b border-blue-500">
              <span className="flex items-center text-blue-400 text-sm">
                <Terminal className="w-4 h-4 mr-2" />
                terminal
              </span>
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent px-8 py-6 bg-slate-900/80 rounded-lg rounded-tl-none inline-block"
            >
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-cyan-400 ml-1"
              >
                █
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Role with Binary Matrix Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-4"
          >
            <div className="inline-block px-4 py-2 bg-slate-800 rounded-lg border border-blue-500/30">
              <motion.div className="flex items-center justify-center">
                {personalData.role.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 1.4 + index * 0.1, 
                      type: "spring", 
                      stiffness: 300 
                    }}
                    className="text-2xl md:text-3xl text-cyan-300 font-mono mx-1"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.8 }}
                className="text-sm text-blue-400 mt-2"
              >
                {personalData.tagline}
              </motion.p>
            </div>
          </motion.div>

          {/* CTA Buttons with Developer Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, staggerChildren: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 200, 255, 0.5)",
                backgroundColor: "#0ea5e9"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group border-b-4 border-cyan-400"
            >
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download className="w-5 h-5" />
              </motion.span>
              Download Resume
              <motion.span
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ↓
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                backgroundColor: "#8b5cf6"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-slate-800 text-cyan-300 rounded-lg font-semibold border border-cyan-500/50 hover:bg-slate-700 transition-all flex items-center gap-2 group"
            >
              <motion.span
                whileHover={{ y: -3 }}
                transition={{ yoyo: Infinity, duration: 0.5 }}
              >
                <Mail className="w-5 h-5" />
              </motion.span>
              Get In Touch
              <motion.span
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                ↑
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Tech-Inspired Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-10 h-16 rounded-full border-4 border-cyan-500/50 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 10] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 font-mono">
                scroll
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;