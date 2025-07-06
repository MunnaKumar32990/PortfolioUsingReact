import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Code, Trophy, Star, Zap, GitBranch, Award, Activity, ChevronRight } from 'lucide-react';

// Platform images
const platformImages = {
  github: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  leetcode: "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
  hackerrank: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
  codechef: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg",
  gitlab: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
  codewars: "https://www.codewars.com/packs/assets/logo.61192cf7.svg",
};

const CodingPlatforms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const codingPlatforms = [
    {
      name: "GitHub",
      username: "MunnaKumar32990",
      stats: "25+ repositories",
      description: "View my repositories and code projects",
      url: "https://github.com/MunnaKumar32990",
      image: platformImages.github,
      color: "from-purple-700 to-purple-900",
      accentColor: "bg-purple-500",
      badges: ["Contributor", "Open Source"],
      icon: GitBranch,
      progress: 85,
      rank: "Advanced"
    },
    {
      name: "LeetCode",
      username: "klu2300032990",
      stats: "150+ problems solved",
      description: "See my algorithmic problem solutions",
      url: "https://leetcode.com/alexander_code",
      image: platformImages.leetcode,
      color: "from-amber-500 to-amber-600",
      accentColor: "bg-amber-500",
      badges: ["Top 35%", "Daily Streak"],
      icon: Code,
      progress: 65,
      rank: "Intermediate"
    },
    {
      name: "HackerRank",
      username: "h2300032990",
      stats: "3⭐ in Python and SQL",
      description: "Check my problem-solving skills and badges",
      url: "https://www.hackerrank.com/h2300032990",
      image: platformImages.hackerrank,
      color: "from-emerald-500 to-emerald-700",
      accentColor: "bg-emerald-500",
      badges: ["Gold Badge", "15 Certificates"],
      icon: Award,
      progress: 75,
      rank: "Proficient"
    },
    {
      name: "CodeChef",
      username: "kl2300032990",
      stats: "1★ Coder",
      description: "Explore my competitive programming profile",
      url: "https://www.codechef.com/users/kl2300032990",
      image: platformImages.codechef,
      color: "from-red-500 to-red-700",
      accentColor: "bg-red-500",
      badges: ["Div. 1", "200+ Problems"],
      icon: Trophy,
      progress: 45,
      rank: "Beginner"
    },
  ];

  // Floating icons animation
  const floatingIcons = [Code, Star, Zap, Activity, Trophy, GitBranch, Award];

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden min-h-screen"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 206, 84, 0.2) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.2) 0%, rgba(255, 255, 255, 0) 50%),
          linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)
        `,
        backgroundSize: "cover"
      }}
      id="coding-platforms"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <div
              className="rounded-full opacity-20 blur-sm"
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                background: `linear-gradient(135deg, 
                  ${['#4F46E5', '#9333EA', '#F59E0B', '#10B981', '#EF4444'][Math.floor(Math.random() * 5)]}, 
                  ${['#7C3AED', '#EC4899', '#F97316', '#06B6D4', '#8B5CF6'][Math.floor(Math.random() * 5)]})`,
              }}
            />
          </motion.div>
        ))}

        {/* Floating icons */}
        {floatingIcons.map((Icon, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-slate-300 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Icon size={24 + Math.random() * 16} />
          </motion.div>
        ))}
      </div>

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(79, 70, 229, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
          `,
          y: backgroundY
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-screen-2xl mx-auto"
        >
          <div className="text-center mb-14 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative inline-block"
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 relative"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  style={{ 
                    backgroundSize: '200% 200%',
                    animation: 'gradient 3s ease infinite'
                  }}
                >
                  My Coding Profiles
                </span>
                <motion.span 
                  className="block mt-3 text-lg font-normal text-blue-500"
                  animate={{ 
                    color: ['#3b82f6', '#8b5cf6', '#3b82f6']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Showcasing my skills across platforms
                </motion.span>
              </motion.h2>
              
              {/* Decorative elements around title */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg"
                animate={{ 
                  scale: [1, 1.4, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-lg"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore my achievements across various coding platforms where I solve problems, compete, and contribute to the developer community.
            </motion.p>
          </div>

          {/* Enhanced grid with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  y: 30,
                  rotateX: -15
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotateX: 0
                } : { 
                  opacity: 0, 
                  scale: 0.8, 
                  y: 30,
                  rotateX: -15
                }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.7, 
                  ease: "backOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -16, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 20px 20px -5px rgba(0, 0, 0, 0.08)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-slate-200/50 dark:border-slate-700/50 flex flex-col h-full transform-gpu"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Animated gradient border */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${platform.color}`}>
                  <motion.div
                    className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                </div>

                {/* Glowing effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{
                    opacity: [0, 0.05, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="p-6 md:p-7 lg:p-8 pt-10 md:pt-12 flex flex-col flex-1">
                  <div className="flex items-start mb-5 md:mb-6">
                    <div className="relative">
                      {/* Pulsing ring effect */}
                      <motion.div
                        className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Icon container with enhanced hover effects */}
                      <motion.div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center overflow-hidden border-2 border-slate-100 dark:border-slate-700 relative z-10"
                        whileHover={{
                          rotate: [0, -5, 5, 0],
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut"
                        }}
                      >
                        {platform.image ? (
                          <motion.img 
                            src={platform.image} 
                            alt={platform.name} 
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        ) : (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
                            <platform.icon size={24} className="text-slate-500 dark:text-slate-400" />
                          </div>
                        )}
                        
                        {/* Floating icon overlay */}
                        <motion.div
                          className="absolute top-1 right-1 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <platform.icon size={14} className="text-slate-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {platform.name}
                      </motion.h3>
                      <motion.p 
                        className="text-slate-600 dark:text-slate-400 text-sm sm:text-base"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        @{platform.username}
                      </motion.p>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-slate-800 dark:text-slate-100 font-semibold text-lg sm:text-xl mb-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {platform.stats}
                  </motion.p>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-5 text-sm sm:text-base">
                    {platform.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{platform.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${platform.accentColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${platform.progress}%` }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-7">
                    {platform.badges.map((badge, i) => (
                      <motion.span 
                        key={i}
                        className={`text-xs px-3 py-1.5 rounded-full ${platform.accentColor} bg-opacity-10 text-slate-700 dark:text-slate-300 border ${platform.accentColor} border-opacity-20 flex items-center`}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: `${platform.accentColor.replace('bg-', 'rgba(')}${platform.accentColor.includes('purple') ? '124, 58, 237' : platform.accentColor.includes('amber') ? '245, 158, 11' : platform.accentColor.includes('emerald') ? '16, 185, 129' : platform.accentColor.includes('red') ? '239, 68, 68' : '249, 115, 22'}, 0.2)`,
                          boxShadow: `0 0 15px ${platform.accentColor.replace('bg-', '#')}40`
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star size={14} className="mr-1.5" />
                        {badge}
                      </motion.span>
                    ))}
                    
                    {/* Rank badge */}
                    <motion.span 
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-800 flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Trophy size={14} className="mr-1.5" />
                      {platform.rank}
                    </motion.span>
                  </div>
                  
                  <div className="mt-auto pt-3">
                    <motion.div
                      className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium py-3 sm:py-3.5 bg-blue-50 dark:bg-slate-700/60 rounded-xl transition-all duration-300 relative overflow-hidden group-hover:bg-blue-100 dark:group-hover:bg-slate-700/80"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      {/* Animated background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <ExternalLink className="w-5 h-5 relative z-10" />
                      </motion.div>
                      <span className="text-sm relative z-10">Visit Profile</span>
                      
                      {/* Hover arrow animation */}
                      <motion.div
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -5 }}
                        animate={{ 
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ChevronRight size={16} className="text-blue-500" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm sm:text-base">Continuously solving problems and participating in coding contests</span>
              <motion.div 
                className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default CodingPlatforms;