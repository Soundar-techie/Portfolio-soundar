import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Soundar K. Built with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;