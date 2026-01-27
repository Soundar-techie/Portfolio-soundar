import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'URCAB Application',
      description:
        'A comprehensive cab booking application built with React and modern web technologies. Features include real-time booking, user authentication, ride tracking, and payment integration. Designed with a focus on user experience and responsive design.',
      techStack: ['React.js', 'Tailwind CSS', 'REST API', 'JWT Auth', 'React Router'],
      github: 'https://github.com/soundark/urcab-app',
      live: 'https://urcab-demo.netlify.app',
      category: 'Full Stack',
    },
    {
      id: 2,
      name: 'FMS Project',
      description:
        'Fleet Management System designed to streamline vehicle tracking, maintenance scheduling, and driver management. Built with React for a smooth user interface and integrated with backend APIs for real-time data synchronization.',
      techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
      github: 'https://github.com/soundark/fms-project',
      live: 'https://fms-demo.vercel.app',
      category: 'Enterprise',
    },
    {
      id: 3,
      name: 'Personal Portfolio',
      description:
        'A modern, responsive portfolio website showcasing my work and skills. Built with React, featuring smooth animations, dark theme, and optimized performance. Includes project gallery, about section, and contact form.',
      techStack: ['React.js', 'Vite', 'Tailwind CSS', 'React Router', 'Lucide Icons'],
      github: 'https://github.com/soundark/portfolio',
      live: 'https://soundark.dev',
      category: 'Personal',
    },
    {
      id: 4,
      name: 'E-Commerce Dashboard',
      description:
        'Admin dashboard for managing an e-commerce platform. Features include product management, order tracking, analytics visualization, and inventory control. Built with modern React patterns and state management.',
      techStack: ['React.js', 'Redux', 'Chart.js', 'Tailwind CSS', 'REST API'],
      github: 'https://github.com/soundark/ecommerce-dashboard',
      live: 'https://ecommerce-admin-demo.netlify.app',
      category: 'Dashboard',
    },
    {
      id: 5,
      name: 'Weather Application',
      description:
        'Real-time weather application that provides current weather conditions, 5-day forecasts, and location-based weather updates. Integrated with OpenWeather API and features a clean, intuitive interface.',
      techStack: ['React.js', 'Weather API', 'Geolocation', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/soundark/weather-app',
      live: 'https://weather-soundar.netlify.app',
      category: 'Web App',
    },
    {
      id: 6,
      name: 'Task Management System',
      description:
        'A productivity tool for managing tasks and projects with features like drag-and-drop, priority levels, due dates, and progress tracking. Built with React hooks and local storage for data persistence.',
      techStack: ['React.js', 'React DnD', 'LocalStorage', 'Tailwind CSS', 'React Hooks'],
      github: 'https://github.com/soundark/task-manager',
      live: 'https://task-manager-soundar.netlify.app',
      category: 'Productivity',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              My Projects
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
            <p className="text-lg text-gray-400 max-w-3xl">
              Here are some of my recent projects that showcase my skills in frontend development, 
              UI/UX design, and problem-solving. Each project represents a unique challenge and 
              learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-600/20"
              >
                {/* Project Header */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="px-6 pb-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-800/10 rounded-xl p-8 border border-primary-600/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Want to see more?
            </h2>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more projects and contributions to open-source.
            </p>
            <a
              href="https://github.com/soundark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;