import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const instaUrl ="https://www.instagram.com/master_mind_0527";
  const faceUrl ="https://www.facebook.com/profile.php?id=100083783171170&mibextid=rS40aB7S9Ucbxw6v";
  const linkedUrl = "https://linkedin.com/in/rathod-savan";
  const gitUrl = "https://github.com/savan1124";

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6 text-xl sm:text-2xl">
          <a
            href={faceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href={linkedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm text-gray-400">
          <p className="text-sm">
            Made with ❤️, ☕ & clean code by Savan Rathod | © 2025
          </p>
          <p className="italic text-xs mt-1 text-gray-500">
            “Where every pixel speaks and every line of code listens.”
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;