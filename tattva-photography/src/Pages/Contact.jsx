const Contact = () => {
  return (
    <div className="flex-grow min-h-screen pt-20 bg-black">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
          />
          <input 
            type="text" 
            placeholder="Mobile Number" 
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
          />
          <textarea 
            placeholder="Your Message" 
            className="border p-3 w-full mb-4 rounded-lg bg-black text-white border-[#7d6957]"
          />
          <button 
            type="submit" 
            className="bg-[#7d6957] text-white p-3 w-full rounded-lg shadow-lg hover:bg-[#645349] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
