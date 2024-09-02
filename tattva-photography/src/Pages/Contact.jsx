import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 w-full mb-4"></textarea>
        <button type="submit" className="bg-gray-800 text-white p-2 w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
