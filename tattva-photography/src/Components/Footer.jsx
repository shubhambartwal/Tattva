import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Links */}
        <div className="flex space-x-4 md:space-x-8 mb-4 md:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-xl hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/tattvaphotography_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://www.youtube.com/@TattvaPhotographyFilms/videos" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-xl hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
         <h2>©Tattva Photography & Films</h2>
         <p className='pl-9'>New Delhi, Dehradun</p> 
        </div>

        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left md:pl-4">
          <p>tattvaphotography55@gmail.com</p>
          <p>+91-7088397943</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
