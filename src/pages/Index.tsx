
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, BrainCircuit, Code, Terminal, Database, Key } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("intro");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-cyber-neon animate-pulse">
          <Terminal className="w-16 h-16 animate-spin" />
          <p className="mt-4 font-mono">Initializing System...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark hero-gradient">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-12"
      >
        {/* AI Bot Guide */}
        <div className="fixed bottom-8 right-8 glass-panel p-4 z-50">
          <div className="flex items-center gap-4">
            <BrainCircuit className="w-8 h-8 text-cyber-neon animate-pulse" />
            <div className="font-mono text-sm">
              <p className="text-cyber-accent">AI Guide: Ready to assist</p>
              <p className="text-xs text-gray-400">Click sections to explore</p>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mohammad Zaieem Khan
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer & Web3 Enthusiast
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border"
            >
              <div className="p-3 hover:text-cyber-neon transition-colors">
                <Github className="w-6 h-6" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border"
            >
              <div className="p-3 hover:text-cyber-neon transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>
          </motion.div>
        </header>

        {/* Navigation */}
        <nav className="mb-16">
          <ul className="flex justify-center gap-6 flex-wrap">
            {["intro", "education", "projects", "skills"].map((section) => (
              <motion.li
                key={section}
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
          </ul>
        </nav>

        {/* Main Content */}
        <motion.main
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8"
        >
          {currentSection === "intro" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Terminal className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold text-gradient">System.out.println("Hello World!");</h2>
              </div>
              <p className="font-mono leading-relaxed">
                <span className="text-cyber-neon">{">"}</span> Full Stack Developer
                <br />
                <span className="text-cyber-neon">{">"}</span> Passionate about creating innovative solutions
                <br />
                <span className="text-cyber-neon">{">"}</span> Experienced in modern web technologies
              </p>
            </section>
          )}

          {currentSection === "education" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Database className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold">Education.decrypt()</h2>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-4">
                  <h3 className="text-lg font-bold text-cyber-purple">University Name</h3>
                  <p className="text-sm text-gray-400">Degree • Year - Year</p>
                </div>
                {/* Add more education items */}
              </div>
            </section>
          )}

          {currentSection === "projects" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Code className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold">Projects.map()</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 hover:neon-border transition-all duration-300">
                  <h3 className="text-lg font-bold text-cyber-purple mb-2">Project Name</h3>
                  <p className="text-sm text-gray-400 mb-4">Project description goes here</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs glass-panel text-cyber-neon">React</span>
                    <span className="px-2 py-1 text-xs glass-panel text-cyber-neon">Node.js</span>
                  </div>
                </div>
                {/* Add more project cards */}
              </div>
            </section>
          )}

          {currentSection === "skills" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Key className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold">Skills.unlock()</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["JavaScript", "React", "Node.js", "Python", "SQL", "C#", "Git", "Docker"].map((skill) => (
                  <motion.div
                    key={skill}
                    className="glass-panel p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyber-neon">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </motion.main>
      </motion.div>
    </div>
  );
};

export default Index;
