import DiscoverMore from '../Components/DiscoverMore';
import Faqs from '../Components/Faq';
import { useEffect, useRef } from 'react';

const Contact = () => {
  const topRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="flex-grow min-h-screen pt-20 bg-black" ref={topRef}>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Contact Us</h2>
        <form
          className="max-w-lg mx-auto"
          action="https://formspree.io/f/xlderrzj"
          method="POST"
        >
          <input
            type="text"
            name="name" // Added name attribute
            placeholder="Your Name"
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
            required // Added required attribute
          />
          <input
            type="tel" // Changed to 'tel' for mobile number
            name="mobile" // Added name attribute
            placeholder="Mobile Number"
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
            required // Added required attribute
          />
          <input
            type="email"
            name="email" // Added name attribute
            placeholder="Your Email"
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
            required // Added required attribute
          />
          <textarea
            name="message" // Added name attribute
            placeholder="Your Message"
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
            required // Added required attribute
          />
          <button
            type="submit"
            className="bg-[#7d6957] text-white p-3 w-full rounded-lg shadow-lg hover:bg-[#645349] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>


      </div>
      <Faqs />
      <div className='py-4'></div>
      <DiscoverMore />
    </div>
  );
};

export default Contact;
