import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll"; // Importing react-scroll's Link component

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-300 py-8">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6">
          {/* Logo/Brand */}
          <h1 className="text-2xl font-bold text-white">Monsoon Parajuli</h1>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/monsoon-parajuli-63ba71271/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/monsoon2001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition duration-300"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="mailto:parajuli.monsoon2001@gmail.com"
              className="hover:text-teal-400 transition duration-300"
            >
              <HiOutlineMail size={25} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={25} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition duration-300 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition duration-300 cursor-pointer"
            >
              Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Monsoon Parajuli. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
