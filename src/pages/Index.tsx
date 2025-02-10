
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, BrainCircuit, Code, Terminal, Database, Sparkles, Webhook, BookOpen, ScrollText, Trophy, Mail, Phone } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("intro");
  const [hoveredSkill, setHoveredSkill] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skillVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-cyber-dark flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1 }}
          className="text-cyber-neon"
        >
          <Terminal className="w-16 h-16" />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-mono"
          >
            Initializing System...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark hero-gradient overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        {/* AI Bot Guide */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="fixed bottom-8 right-8 glass-panel p-4 z-50 hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <BrainCircuit className="w-8 h-8 text-cyber-neon" />
            </motion.div>
            <div className="font-mono text-sm">
              <motion.p 
                animate={{ 
                  color: ["#9945FF", "#14F195", "#9945FF"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-cyber-accent"
              >
                AI Guide: Ready to assist
              </motion.p>
              <p className="text-xs text-gray-400">Click sections to explore</p>
            </div>
          </div>
        </motion.div>

        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-gradient cyber-glitch"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
            data-text="Mohammad Zaieem Khan"
          >
            Mohammad Zaieem Khan
          </motion.h1>
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 hover:text-cyber-neon transition-colors">
              <Mail className="w-4 h-4 text-cyber-neon" />
              <a href="mailto:khan0zaieem89@gmail.com">khan0zaieem89@gmail.com</a>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 hover:text-cyber-neon transition-colors">
              <Phone className="w-4 h-4 text-cyber-neon" />
              <a href="tel:+918493931426">+91 8493931426</a>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center gap-6 mt-8"
            variants={containerVariants}
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="p-3 hover:text-cyber-neon transition-colors">
                <Github className="w-6 h-6" />
              </div>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="p-3 hover:text-cyber-neon transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
            </motion.a>
          </motion.div>
        </header>

        {/* Navigation */}
        <nav className="mb-16">
          <motion.ul 
            className="flex justify-center gap-6 flex-wrap"
            variants={containerVariants}
          >
            {["intro", "education", "projects", "skills"].map((section) => (
              <motion.li
                key={section}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleSectionChange(section)}
                  className={`glass-panel px-6 py-3 uppercase text-sm tracking-wider ${
                    currentSection === section 
                      ? "border-cyber-neon text-cyber-neon border"
                      : "hover:border-cyber-accent hover:text-cyber-accent border border-transparent"
                  }`}
                >
                  {section}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.main
            key={currentSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-8"
          >
            {currentSection === "intro" && (
              <motion.section 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  variants={itemVariants}
                >
                  <Terminal className="w-8 h-8 text-cyber-neon" />
                  <h2 className="text-2xl font-bold text-gradient">System.out.println("Hello World!");</h2>
                </motion.div>
                <motion.p 
                  className="font-mono leading-relaxed"
                  variants={containerVariants}
                >
                  {[
                    "Full Stack Developer",
                    "Web3 Enthusiast",
                    "Building innovative solutions with modern technologies"
                  ].map((text, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="block"
                    >
                      <span className="text-cyber-neon">{">"}</span> {text}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.section>
            )}

            {currentSection === "education" && (
              <motion.section 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  variants={itemVariants}
                >
                  <BookOpen className="w-8 h-8 text-cyber-neon" />
                  <h2 className="text-2xl font-bold">Education.decrypt()</h2>
                </motion.div>
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="glass-panel p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold text-cyber-accent">Model Institute of Engineering and Technology</h3>
                    <p className="text-gray-400">B. Tech in Computer Science Engineering</p>
                    <div className="flex justify-between mt-2">
                      <p className="text-cyber-neon">Current CGPA: 8.11</p>
                      <p className="text-gray-400">2022 - 2026</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="glass-panel p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold text-cyber-accent">Indira Gandhi National Open University</h3>
                    <p className="text-gray-400">B.A. (Hons.) in History</p>
                    <p className="text-gray-400 mt-2">2022 - 2025</p>
                  </motion.div>
                </motion.div>
              </motion.section>
            )}

            {currentSection === "projects" && (
              <motion.section 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  variants={itemVariants}
                >
                  <Code className="w-8 h-8 text-cyber-neon" />
                  <h2 className="text-2xl font-bold">Projects.map()</h2>
                </motion.div>
                <motion.div 
                  className="grid grid-cols-1 gap-6"
                  variants={containerVariants}
                >
                  {[
                    {
                      title: "SQL-Based YouTube Playlist Manager App",
                      description: "Built a desktop app for creating, managing, and deleting YouTube playlist albums, with SQL for data storage and a custom video player.",
                      tech: ["C#", "SQL"]
                    },
                    {
                      title: "WhatsApp Medicine Ordering & Appointment Bot",
                      description: "Developed a bot to simplify ordering medicine from local pharmacies and booking clinic appointments via WhatsApp.",
                      tech: ["Landbot"]
                    },
                    {
                      title: "Channelling Bot for AI Tools",
                      description: "Created a UiPath bot to mediate between users and trending AI tools, providing a streamlined and personalized AI experience.",
                      tech: ["UiPath"]
                    }
                  ].map((project, index) => (
                    <motion.div 
                      key={index}
                      className="glass-panel p-6"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(20, 241, 149, 0.2)"
                      }}
                    >
                      <h3 className="text-xl font-bold text-cyber-accent mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-2 py-1 text-xs glass-panel text-cyber-neon"
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {currentSection === "skills" && (
              <motion.section 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  variants={itemVariants}
                >
                  <Sparkles className="w-8 h-8 text-cyber-neon" />
                  <h2 className="text-2xl font-bold">Skills.unlock()</h2>
                </motion.div>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="glass-panel p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Programming Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["C++", "Python"].map((skill, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 glass-panel text-cyber-neon"
                          variants={skillVariants}
                          whileHover="hover"
                          onHoverStart={() => setHoveredSkill(skill)}
                          onHoverEnd={() => setHoveredSkill("")}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass-panel p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                      <Webhook className="w-5 h-5" />
                      Web Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["WordPress", "SEO", "Google AdWords", "Prompt Engineering"].map((skill, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 glass-panel text-cyber-neon"
                          variants={skillVariants}
                          whileHover="hover"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass-panel p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Data Management
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        className="px-3 py-1 glass-panel text-cyber-neon"
                        variants={skillVariants}
                        whileHover="hover"
                      >
                        MySQL
                      </motion.span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass-panel p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                      <ScrollText className="w-5 h-5" />
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["English Proficiency", "Content Writing", "Creative Writing"].map((skill, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 glass-panel text-cyber-neon"
                          variants={skillVariants}
                          whileHover="hover"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass-panel p-6 md:col-span-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Certifications
                    </h3>
                    <motion.div 
                      className="space-y-4"
                      variants={containerVariants}
                    >
                      {[
                        {
                          title: "Fundamentals of Cybersecurity",
                          period: "Coursera • Sep 2023 - Dec 2023"
                        },
                        {
                          title: "C++ Programming Training Workshop",
                          period: "Programming Pathshala • Aug 2023"
                        },
                        {
                          title: "The Joy of Using Python",
                          period: "NPTEL • Jul 2023 - Oct 2023"
                        }
                      ].map((cert, index) => (
                        <motion.div
                          key={index}
                          className="glass-panel p-4"
                          variants={itemVariants}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 0 15px rgba(20, 241, 149, 0.15)"
                          }}
                        >
                          <h4 className="text-cyber-neon">{cert.title}</h4>
                          <p className="text-sm text-gray-400">{cert.period}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.section>
            )}
          </motion.main>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Index;

