import React, { useState } from 'react';
import { Link} from 'react-router-dom'; // Import Link from react-router-dom



const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-black font-extrabold text-xl tracking-widest"> {/* Use Link instead of <a> */}
            <img src="https://andisoftwaresolutions.com/1_files/logo.jpg" alt="logo" />
          </Link>
          <ul className="hidden sm:flex space-x-9">
            <li>
              <Link to="/" className="text-black hover:underline"> {/* Use Link instead of <a> */}
                Home
              </Link>
            </li>
            
            <li>
              <Link to="/cloud" className="text-black hover:underline"> {/* Use Link instead of <a> */}
                Cloud Software
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:underline"> {/* Use Link instead of <a> */}
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:underline"> {/* Use Link instead of <a> */}
                Contact
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>

          {/* Mobile NavBar start */}
          <button className="sm:hidden text-black" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
        <ul className="sm:hidden space-y-4">
          <li>
            <Link to="/" className="text-black hover:underline"> {/* Use Link instead of <a> */}
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/cloud" className="text-black hover:underline"> {/* Use Link instead of <a> */}
              Cloud Software
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:underline"> {/* Use Link instead of <a> */}
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:underline"> {/* Use Link instead of <a> */}
              Contact
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
