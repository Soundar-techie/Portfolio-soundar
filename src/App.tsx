import React from 'react';
import { Github, ExternalLink, ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { style } from 'framer-motion/client';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <motion.div 
          className="max-w-6xl mx-auto px-4 py-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-8 mb-8"
            variants={fadeIn}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
  <img
    src="/src/profilePhoto/soundar-portfolio.jpg" 
    alt="VKS"
    className="h-35 w-35 rounded-[50%] object-cover hover:scale-105 transition-transform"
  />

</div>

            <div>
              <motion.h1 
                className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                variants={fadeIn}
              >
                Soundar K
              </motion.h1>
              <motion.h2 
                className="text-2xl text-gray-600 mt-2"
                variants={fadeIn}
              >
                Frontend Developer
              </motion.h2>
            </div>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl"
            variants={fadeIn}
          >
            Passionate about crafting beautiful, responsive, and user-friendly web interfaces with modern JavaScript frameworks and best practices.
          </motion.p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Projects Section */}
        <motion.section 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeIn}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-3">Communion</h3>
              <p className="text-gray-600 mb-4">
                A modern social platform built with React, featuring a responsive UI, real-time updates, and seamless user interactions.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://communion-dev.netlify.app/"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-5">Events Calendar</h3>
              <p className="text-gray-600 mb-4">
                A modern social platform built with React, featuring a responsive UI, real-time updates, and seamless user interactions.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://reminder-calendar.netlify.app/"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeIn}
          >
            {[
              {
                title: "Core Technologies",
                skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3"]
              },
              {
                title: "UI & Styling",
                skills: ["Tailwind CSS", "Styled Components", "CSS Modules", "Responsive Design"]
              },
              {
                title: "Tools & Libraries",
                skills: ["Vite", "Redux Toolkit", "React Query", "Jest & React Testing Library"]
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={fadeIn}
              >
                <h3 className="font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Frontend Experience
          </motion.h2>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            variants={fadeIn}
          >
            <ul className="space-y-6">
              {[
                {
                  title: "Single Page Applications",
                  description: "Extensive experience in building complex SPAs with React, focusing on performance optimization and clean architecture."
                },
                {
                  title: "Component Libraries",
                  description: "Developed reusable component libraries with TypeScript, ensuring consistency across large-scale applications."
                },
                {
                  title: "UI/UX Implementation",
                  description: "Skilled in translating design mockups into pixel-perfect, responsive interfaces with modern CSS techniques."
                }
              ].map((exp, index) => (
                <motion.li 
                  key={index}
                  className="hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Links Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Connect
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-6"
            variants={fadeIn}
          >
            {[
              {
                href: "https://github.com/Soundar-techie",
                icon: Github,
                text: "GitHub",
                className: "bg-gray-900 hover:bg-gray-800"
              },
              {
                href: "https://leetcode.com/problem-list/2i5evy12/",
                icon: ArrowUpRight,
                text: "LeetCode",
                className: "bg-[#FFA116] hover:bg-[#FF9900]"
              },
              {
                href: "vksoundar2020@gmail.com",
                icon: Mail,
                text: "Contact Me",
                className: "bg-blue-600 hover:bg-blue-700"
              }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`inline-flex items-center px-4 py-2 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${link.className}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                variants={fadeIn}
              >
                <link.icon className="w-5 h-5 mr-2" />
                {link.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;