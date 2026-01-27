import { Code2, Server, Wrench, GraduationCap } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={24} />,
      skills: [
        'React.js',
        'Next.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'Tailwind CSS',
        'HTML5 & CSS3',
        'Responsive Design',
        'UI/UX Implementation',
      ],
    },
    {
      title: 'Backend & API',
      icon: <Server size={24} />,
      skills: [
        'REST API Integration',
        'JWT Authentication',
        'Node.js (Basic)',
        'Express.js (Basic)',
        'API Development',
        'Data Fetching',
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      skills: [
        'Git & GitHub',
        'VS Code',
        'npm/yarn',
        'Vite',
        'Responsive Design',
        'Browser DevTools',
        'Figma (Basic)',
        'Agile Methodology',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              About Me
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              MERN Stack Web Developer and BCA graduate with hands-on experience in React.js, Node.js, Express.js, and MongoDB. 
              Worked on real-world projects like URCAB and FMS, contributing to frontend development, API integration, and basic backend functionality.
              Passionate about building scalable web applications, writing clean code, and collaborating in fast-paced team environments.

            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              With expertise in React.js, Next.js, and modern frontend technologies, I specialize in 
              transforming design concepts into responsive, performant web applications. I believe in 
              writing clean, maintainable code and staying updated with the latest industry trends and 
              best practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or learning about the latest developments in web development. I'm always excited 
              to work on challenging projects that push my boundaries and help me grow as a developer.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-600/20 rounded-lg text-primary-400">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg text-primary-400 flex-shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-primary-400 font-medium mb-3">
                    Computer Science & Applications
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive study of computer science fundamentals, programming languages, 
                    web technologies, database management, and software development principles. 
                    Built a strong foundation in both theoretical concepts and practical application 
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-800/10 rounded-xl p-8 border border-primary-600/30">
            <h2 className="text-2xl font-bold text-white mb-4">Beyond Coding</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a firm believer in continuous learning and personal growth. I regularly participate 
              in online coding challenges, contribute to open-source projects, and stay active in the 
              developer community. I also enjoy sharing knowledge through blog posts and helping fellow 
              developers solve problems. My goal is to create meaningful digital solutions that make a 
              positive impact on users' lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;