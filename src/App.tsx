import React, { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, Phone, Mail, Linkedin } from "lucide-react";
import { Modal, Button } from "react-bootstrap"; // Import React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import profileImg from "./assets/soundar-portfolio.jpg";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 animate-gradient-bg"></div>

      {/* Main content wrapper */}
      <div className="relative z-10">

        {/* Hero Section */}
        <header className="py-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* Profile Image */}
            <div
              className="group w-36 h-36 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-xl"
              onClick={handleOpen}
            >
              <img
                src={profileImg}
                alt="Soundar K"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>


            {/* Profile Info */}
            <div className="text-center md:text-left text-white">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Soundar K
              </h1>
              <h2 className="text-2xl mt-2">Web Developer</h2>

              <div className="mt-4 space-y-1 text-sm md:text-base">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9361513600</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> vksoundar2020@gmail.com</p>
                <p className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> 1, Pandamangalam Rd, Kabilarmalai, Tamil Nadu 637204, Namakkal</p>
              </div>

              <p className="mt-6 max-w-lg text-gray-200">
                React Frontend Developer with experience in building responsive web applications using React.js, Next.js, and Tailwind CSS. Skilled in REST API integration, JWT authentication, data visualization, and state management. Strong problem-solving skills focused on delivering seamless user experiences.
              </p>
            </div>
          </div>
        </header>

        {/* Profile Image Modal */}
        <Modal show={showModal} onHide={handleClose} centered size="sm" contentClassName="rounded-xl">
          <Modal.Body className="p-0">
            <img src={profileImg} alt="Soundar K" className="w-full h-full object-cover" />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
          </Modal.Footer>
        </Modal>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">

          {/* Work Experience */}
          <section>
            <h2 className="text-3xl font-semibold text-white mb-8">Work Experience</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-102 text-gray-200">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <p className="text-gray-300">September 2025 - Till Date, Coimbatore, Tamil Nadu</p>
                <p className="mt-2">Worked on live projects, building responsive web applications with React, Next.js, Tailwind CSS, and integrating APIs.</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-semibold text-white mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { degree: "BCA", institution: "K.S.R College of Arts and Science", location: "Thiruchengodu, Tamil Nadu", duration: "May 2022 - May 2025", score: "7.6 CGPA" },
                { degree: "HSC", institution: "Govt Higher Secondary School", location: "Namakkal, Tamil Nadu", duration: "2021 - 2022", score: "75%" },
                { degree: "SSLC", institution: "Govt Higher Secondary School", location: "Namakkal, Tamil Nadu", duration: "2019 - 2020", score: "85%" },
              ].map((edu, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 text-gray-200">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}, {edu.location}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.duration} • <span className="font-medium">{edu.score}</span></p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-3xl font-semibold text-white mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "React Bootstrap"] },
                { title: "Backend & API", skills: ["REST API Integration", "JWT Authentication", "Node.js"] },
                { title: "Tools & Practices", skills: ["Chart.js / Recharts", "Git", "Responsive Design", "Problem-solving"] },
              ].map((cat, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 text-gray-200">
                  <h3 className="font-semibold mb-4">{cat.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {cat.skills.map((skill, idx) => (<li key={idx}>{skill}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies */}
          <section>
            <h2 className="text-3xl font-semibold text-white mb-8">Hobbies</h2>
            <div className="flex flex-wrap gap-4">
              {["Cricket", "Building Personal Projects", "Learning"].map((hobby, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 text-gray-200 font-medium">{hobby}</div>
              ))}
            </div>
          </section>

          {/* Connect Section */}
          <section>
            <h2 className="text-3xl font-semibold text-white mb-8">Connect With Me</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { href: "https://github.com/Soundar-techie", icon: Github, text: "GitHub", className: "bg-gray-900 hover:bg-gray-800" },
                { href: "https://leetcode.com/problem-list/2i5evy12/", icon: ArrowUpRight, text: "LeetCode", className: "bg-[#FFA116] hover:bg-[#FF9900]" },
                { href: "https://www.linkedin.com/in/soundar-k-216b13270", icon: Linkedin, text: "LinkedIn", className: "bg-blue-600 hover:bg-blue-700" },
                { href: "mailto:vksoundar2020@gmail.com", icon: Mail, text: "Email", className: "bg-green-600 hover:bg-green-700" },
                { href: "tel:+919361513600", icon: Phone, text: "Phone", className: "bg-orange-600 hover:bg-orange-700" },
              ].map((link, i) => (
                <a key={i} href={link.href} className={`inline-flex items-center px-4 py-2 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${link.className}`} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 mr-2" /> {link.text}
                </a>
              ))}
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-20 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-400">
            © {new Date().getFullYear()} • Built with React & Tailwind CSS
          </div>
        </footer>

      </div>
    </div>
  );

}

export default App;
