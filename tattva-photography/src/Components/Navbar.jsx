import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Move useNavigate outside the function
  
  const handleHome = () => {
    navigate('/'); // Navigate to home page
  };

  const handleNav = () => {
    setNav(!nav);
  };

  // Determine if the current page is Home or Photography page
  const isTransparent = location.pathname === '/' || location.pathname === '/photography';

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'underline decoration-2 underline-offset-4'
      : '';
  };

  return (
    <div
      className={`${isTransparent ? 'absolute' : 'fixed'
        } top-0 left-0 w-full h-20 flex justify-between items-center px-6 z-20 ${isTransparent ? '' : 'bg-black'
        }`}
    >
      {/* Logo Section */}
      <div className="z-30 cursor-pointer" >
        <img
          src={logo}
          alt="Logo" onClick={handleHome}
          className="h-36 md:h-60 max-w-full object-contain"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex p-2 text-white font-bold space-x-6">
        <li>
          <Link to="/" className={getLinkClass('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={getLinkClass('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/photography" className={getLinkClass('/photography')}>
            Photography
          </Link>
        </li>
        <li>
          <Link to="/films" className={getLinkClass('/films')}>
            Films
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="relative inline-block px-4 rounded-xl overflow-hidden bg-[#7d6957] text-white hover:bg-[#4c3e34] transition-colors duration-300"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="md:hidden z-30">
        {nav ? (
          <HiOutlineX size={24} className="text-white" />
        ) : (
          <HiOutlineMenuAlt4 size={24} className="text-white" />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-full h-screen bg-black px-4 py-7 flex flex-col z-20 transition-all duration-300 ease-in-out'
            : 'fixed top-0 left-[-100%] h-screen w-full bg-black px-4 py-7 flex flex-col z-20 transition-all duration-300 ease-in-out'
        }
      >
        <ul
          onClick={handleNav}
          className="text-white font-bold flex flex-col items-center space-y-4"
        >
          <li>
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/photography" className={getLinkClass('/photography')}>
              Photography
            </Link>
          </li>
          <li>
            <Link to="/films" className={getLinkClass('/films')}>
              Films
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative inline-block px-4 py-2 rounded-xl overflow-hidden bg-[#7d6957] text-white"
            >
              <span className="relative z-10">Contact</span>
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
