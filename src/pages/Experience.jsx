import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'MERN Stack Developer Intern',
            company: 'Smitiv Mobiles Technologies',
            location: 'Coimbatore, Tamil Nadu',
            period: 'September 2025 - January 2026',
            type: 'Internship',
            responsibilities: [
                'Developed responsive user interfaces using React.js, Tailwind CSS, and modern JavaScript (ES6+)',
                'Worked with backend APIs built using Node.js and Express.js to fetch and display dynamic data',
                'Integrated RESTful APIs and implemented JWT-based authentication for user login and protected routes',
                'Collaborated with team members to convert Figma designs into clean, accessible React components',
                'Contributed to real-world projects such as URCAB Application and FMS Project, focusing mainly on frontend development',
                'Assisted in optimizing application performance through component reusability and efficient state management',
                'Used Git and GitHub for version control, managing feature branches and pull requests',
                'Participated in agile development processes including daily stand-ups and sprint reviews',
            ],

        },
        // {
        //     title: 'Frontend Developer Intern',
        //     company: 'Digital Innovation Labs',
        //     location: 'Coimbatore, Tamil Nadu',
        //     period: 'June 2022 - December 2022',
        //     type: 'Internship',
        //     responsibilities: [
        //         'Assisted in building interactive user interfaces using React.js and modern JavaScript (ES6+)',
        //         'Learned and applied best practices in component-based architecture and state management',
        //         'Collaborated with senior developers to implement new features and fix bugs in production applications',
        //         'Gained hands-on experience with Git version control and participated in team code reviews',
        //         'Developed reusable UI components that improved development efficiency by 30%',
        //         'Worked with REST APIs to fetch and display dynamic data in web applications',
        //     ],
        // },
    ];

    const achievements = [
        'Completed multiple real-world projects using React.js and Tailwind CSS with focus on clean UI and responsiveness',
        'Built and deployed a personal portfolio showcasing projects, skills, and live demos on GitHub Pages',
        'Gained hands-on experience integrating REST APIs and implementing JWT-based authentication',
        'Improved frontend performance and usability through component reusability and efficient state management',
        'Actively practiced problem-solving and version control using Git and GitHub',
    ];


    return (
        <div className="min-h-screen pt-16">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                            Work Experience
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
                        <p className="text-lg text-gray-400 max-w-3xl">
                            My professional journey in web development, showcasing the roles I've held and the
                            skills I've developed along the way.
                        </p>
                    </div>

                    {/* Experience Timeline */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-primary-600 transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-xl text-primary-400 font-semibold mb-3">
                                            {exp.company}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                            <span className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                {exp.period}
                                            </span>
                                            <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs font-medium">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="p-4 bg-primary-600/20 rounded-lg text-primary-400">
                                            <Briefcase size={32} />
                                        </div>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-white mb-3">
                                        Key Responsibilities:
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((responsibility, respIndex) => (
                                            <li
                                                key={respIndex}
                                                className="flex items-start gap-3 text-gray-300"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="text-primary-500 flex-shrink-0 mt-1"
                                                />
                                                <span className="leading-relaxed">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Key Achievements */}
                    <div className="bg-gradient-to-r from-primary-600/10 to-primary-800/10 rounded-xl p-8 border border-primary-600/30">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Key Achievements & Highlights
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <CheckCircle2
                                        size={20}
                                        className="text-primary-400 flex-shrink-0 mt-1"
                                    />
                                    <span className="leading-relaxed">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills Gained */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Technical Skills Developed
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                'MongoDB (Basic CRUD Operations)',
                                'Express.js (RESTful API)',
                                'React.js',
                                'Node.js',
                                'JavaScript (ES6+)',
                                'JWT Authentication',
                                'REST API Integration',
                                'State Management (React Hooks)',
                                'Tailwind CSS',
                                'UI Implementation from Designs',
                                'Git & GitHub (Version Control)',
                                'Basic Performance Optimization',
                            ]
                                .map((skill, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-700/50 hover:bg-primary-600/20 hover:border-primary-600 border border-gray-600 rounded-lg p-3 text-center text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-105"
                                    >
                                        {skill}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;