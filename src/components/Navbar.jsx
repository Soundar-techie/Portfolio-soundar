import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // ✅ Resume Functions
  const handleDownload = async () => {
    try {
      const response = await fetch("/soundar_resume.pdf");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "soundar_resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleView = () => {
    window.open("/soundar_resume.pdf", "_blank");
  };

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            VKS
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary-400 ${isActive(link.path)
                  ? 'text-primary-400 border-b-2 border-primary-400'
                  : 'text-gray-300'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Resume Buttons */}
            <button
              onClick={handleView}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition"
            >
              <FileText size={16} />
              View Resume
            </button>

            {/* <button
              onClick={handleDownload}
              className="px-4 py-2 text-sm font-medium border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition"
            >
              Download
            </button> */}
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* ✅ Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive(link.path)
                  ? 'text-primary-400 bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ Resume Buttons (Mobile) */}
            <div className="mt-3 space-y-2">
              <button
                onClick={handleView}
                className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition"
              >
                View Resume
              </button>

              {/* <button
                onClick={handleDownload}
                className="w-full px-4 py-2 border border-primary-500 text-primary-400 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition"
              >
                Download Resume
              </button> */}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;