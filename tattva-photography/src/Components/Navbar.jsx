import logo from '../assets/2.png';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for determining the current route

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  // Determine if the current page is the Home page
  const isHomePage = location.pathname === '/';

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'underline decoration-2 underline-offset-4'
      : '';
  };

  return (
    <div
      className={`${
        isHomePage ? 'absolute' : 'fixed'
      } top-0 left-0 w-full h-20 flex justify-between items-center px-6 z-20 ${
        isHomePage ? '' : 'bg-black'
      }`}
    >
      {/* Logo Section */}
      <div className="z-30">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto max-w-[150px] object-contain"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex p-2 text-white font-bold">
        <li className="m-1">
          <Link to="/" className={getLinkClass('/')}>
            Home
          </Link>
        </li>
        <li className="m-1">
          <Link to="/projects" className={getLinkClass('/projects')}>
            Projects
          </Link>
        </li>
        <li className="m-1">
          <Link to="/services" className={getLinkClass('/services')}>
            Services
          </Link>
        </li>
        <li className="m-1">
          <Link to="/about" className={getLinkClass('/about')}>
            About
          </Link>
        </li>
        <li className="m-1">
          <Link to="/contact" className={getLinkClass('/contact')}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center justify-around ">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white text-xl m-2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-xl m-2" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white text-xl m-2" />
        </a>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="md:hidden z-30">
        {nav ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={
          nav
            ? 'absolute top-0 left-0 w-full h-screen bg-slate-500 px-4 py-7 flex flex-col z-20'
            : 'absolute top-0 left-[-100%] h-screen w-full bg-slate-500 px-4 py-7 flex flex-col z-20 transition-all duration-300'
        }
      >
        <ul
          onClick={handleNav} // Collapse the mobile menu when a link is clicked
          className="text-white font-bold flex flex-col items-center"
        >
          <li className="border-b w-full text-center py-2">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li className="border-b w-full text-center py-2">
            <Link to="/projects" className={getLinkClass('/projects')}>
              Projects
            </Link>
          </li>
          <li className="border-b w-full text-center py-2">
            <Link to="/services" className={getLinkClass('/services')}>
              Services
            </Link>
          </li>
          <li className="border-b w-full text-center py-2">
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
          </li>
          <li className="border-b w-full text-center py-2">
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-around mt-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
