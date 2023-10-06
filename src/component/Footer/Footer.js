import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons
import { AiFillCloud } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl">
          <img src="https://andisoftwaresolutions.com/1_files/logo.jpg" alt="Logo" className="w-16 h-16" /> {/* Replace with your logo image */}
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-400">
              <FaHome className="inline-block mr-1" />
              Home
            </a>
          </li>
          <li>
          <a href="/cloud" className="hover:text-gray-400">
            <AiFillCloud className="inline-block mr-1" />
            Cloud Software
          </a>
        </li>

          <li>
            <a href="/about" className="hover:text-gray-400">
              <FaInfoCircle className="inline-block mr-1" />
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              <FaEnvelope className="inline-block mr-1" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
