import { Link } from 'react-router-dom';
const DiscoverMore = () => {
  return (
    <section className="relative w-full bg-[#1b1b19] py-2 md:py-4 ">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 opacity-100">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
          {/* Left side: Text content */}
          <div className="md:w-1/2 md:pr-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Connect with us
            </h2>
            <p className="text-white">
              Let’s capture your love story together! Whether you’re ready to book or just want to chat about your wedding plans, we’re here to help. Reach out, and let’s make your special day unforgettable. Drop us an email, and we’ll get back to you soon!
            </p>
          </div>
          {/* Right side: Button */}
          <div className="md:w-1/2 flex items-center justify-center">
          <Link to="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#7d6957] transition-colors duration-300" >
              Reach Out
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
