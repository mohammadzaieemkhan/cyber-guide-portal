
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, BrainCircuit, Code, Terminal, Database, Sparkles, Webhook, BookOpen, ScrollText, Trophy, Mail, Phone } from "lucide-react";

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
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyber-neon" />
              <a href="mailto:khan0zaieem89@gmail.com" className="hover:text-cyber-neon transition-colors">
                khan0zaieem89@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyber-neon" />
              <a href="tel:+918493931426" className="hover:text-cyber-neon transition-colors">
                +91 8493931426
              </a>
            </div>
          </motion.div>
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
                <span className="text-cyber-neon">{">"}</span> Web3 Enthusiast
                <br />
                <span className="text-cyber-neon">{">"}</span> Building innovative solutions with modern technologies
              </p>
            </section>
          )}

          {currentSection === "education" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold">Education.decrypt()</h2>
              </div>
              <div className="space-y-6">
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold text-cyber-accent">Model Institute of Engineering and Technology</h3>
                  <p className="text-gray-400">B. Tech in Computer Science Engineering</p>
                  <div className="flex justify-between mt-2">
                    <p className="text-cyber-neon">Current CGPA: 8.11</p>
                    <p className="text-gray-400">2022 - 2026</p>
                  </div>
                </div>
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold text-cyber-accent">Indira Gandhi National Open University</h3>
                  <p className="text-gray-400">B.A. (Hons.) in History</p>
                  <p className="text-gray-400 mt-2">2022 - 2025</p>
                </div>
              </div>
            </section>
          )}

          {currentSection === "projects" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Code className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold">Projects.map()</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <motion.div 
                  className="glass-panel p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-cyber-accent mb-2">SQL-Based YouTube Playlist Manager App</h3>
                  <p className="text-gray-400 mb-4">Built a desktop app for creating, managing, and deleting YouTube playlist albums, with SQL for data storage and a custom video player.</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 text-xs glass-panel text-cyber-neon">C#</span>
                    <span className="px-2 py-1 text-xs glass-panel text-cyber-neon">SQL</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-cyber-accent mb-2">WhatsApp Medicine Ordering & Appointment Bot</h3>
                  <p className="text-gray-400 mb-4">Developed a bot to simplify ordering medicine from local pharmacies and booking clinic appointments via WhatsApp.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs glass-panel text-cyber-neon">Landbot</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-cyber-accent mb-2">Channelling Bot for AI Tools</h3>
                  <p className="text-gray-400 mb-4">Created a UiPath bot to mediate between users and trending AI tools, providing a streamlined and personalized AI experience.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs glass-panel text-cyber-neon">UiPath</span>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {currentSection === "skills" && (
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Sparkles className="w-8 h-8 text-cyber-neon" />
                <h2 className="text-2xl font-bold">Skills.unlock()</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6">
                  <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 glass-panel text-cyber-neon">C++</span>
                    <span className="px-3 py-1 glass-panel text-cyber-neon">Python</span>
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                    <Webhook className="w-5 h-5" />
                    Web Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 glass-panel text-cyber-neon">WordPress</span>
                    <span className="px-3 py-1 glass-panel text-cyber-neon">SEO</span>
                    <span className="px-3 py-1 glass-panel text-cyber-neon">Google AdWords</span>
                    <span className="px-3 py-1 glass-panel text-cyber-neon">Prompt Engineering</span>
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data Management
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 glass-panel text-cyber-neon">MySQL</span>
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                    <ScrollText className="w-5 h-5" />
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 glass-panel text-cyber-neon">English Proficiency</span>
                    <span className="px-3 py-1 glass-panel text-cyber-neon">Content Writing</span>
                    <span className="px-3 py-1 glass-panel text-cyber-neon">Creative Writing</span>
                  </div>
                </div>

                <div className="glass-panel p-6 md:col-span-2">
                  <h3 className="text-lg font-bold text-cyber-accent mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    <div className="glass-panel p-4">
                      <h4 className="text-cyber-neon">Fundamentals of Cybersecurity</h4>
                      <p className="text-sm text-gray-400">Coursera • Sep 2023 - Dec 2023</p>
                    </div>
                    <div className="glass-panel p-4">
                      <h4 className="text-cyber-neon">C++ Programming Training Workshop</h4>
                      <p className="text-sm text-gray-400">Programming Pathshala • Aug 2023</p>
                    </div>
                    <div className="glass-panel p-4">
                      <h4 className="text-cyber-neon">The Joy of Using Python</h4>
                      <p className="text-sm text-gray-400">NPTEL • Jul 2023 - Oct 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </motion.main>
      </motion.div>
    </div>
  );
};

export default Index;
