import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full p-6 bg-white shadow-md">
      {/* Logo Section */}
      <div className="logo cursor-pointer">
        <Link to="/">
          <img src="src/assets/logo.webp" width="200px" alt="logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex items-center space-x-6">
          <Link to="/">
            <li className="font-bold hover:text-gray-500 cursor-pointer">Home</li>
          </Link>
          <Link to="/internships">
            <li className="font-bold hover:text-gray-500 cursor-pointer">Internship</li>
          </Link>
          <Link to="/company-collaborations">
            <li className="font-bold hover:text-gray-500 cursor-pointer">Company Collaboration</li>
          </Link>
          <Link to="/reviews">
            <li className="font-bold hover:text-gray-500 cursor-pointer">Company Reviews</li>
          </Link>
          <Link to="/contact">
            <li className="font-bold hover:text-gray-500 cursor-pointer">Contact Us</li>
          </Link>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded">
            Job Portal
          </button>
          <Link to="/login">
            <button className="btn border-2 border-green-500 text-green-500 hover:bg-green-100 font-bold px-4 py-2 rounded">
              Internee's Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center shadow-lg md:hidden z-10">
          <ul className="flex flex-col items-center space-y-4 w-full p-4">
            <Link to="/" onClick={toggleMenu}>
              <li className="font-bold hover:text-gray-500 cursor-pointer">Home</li>
            </Link>
            <Link to="/internships" onClick={toggleMenu}>
              <li className="font-bold hover:text-gray-500 cursor-pointer">Internship</li>
            </Link>
            <Link to="/company-collaborations" onClick={toggleMenu}>
              <li className="font-bold hover:text-gray-500 cursor-pointer">Company Collaboration</li>
            </Link>
            <Link to="/reviews" onClick={toggleMenu}>
              <li className="font-bold hover:text-gray-500 cursor-pointer">Company Reviews</li>
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <li className="font-bold hover:text-gray-500 cursor-pointer">Contact Us</li>
            </Link>
          </ul>
          <div className="flex flex-col items-center space-y-3 pb-4">
            <button
              className="btn bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded"
              onClick={toggleMenu}
            >
              Job Portal
            </button>
            <Link to="/login" onClick={toggleMenu}>
              <button className="btn border-2 border-green-500 text-green-500 hover:bg-green-100 font-bold px-4 py-2 rounded">
                Internee's Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
