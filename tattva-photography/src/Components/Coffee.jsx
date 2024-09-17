import coffee from '../assets/coffee.jpg';

const Coffee = () => {
  return (
    <div className="container  mx-auto min-w-full px-4 py-16 border border-1 mt-1 mb-12 bg-yellow-500">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#121212]">
            Lights, Camera, "Where's my coffee?" - That's Us!
          </h2>
         
          <p className="text-sm md:text-base lg:text-lg text-white mb-6 leading-relaxed">
            We're the team that captures everything from 'awww' moments at weddings to the 'wait, 
            that was unintentional' at commercial shoots. With lenses sharper than our Monday 
            morning wit and cameras faster than our coffee runs, we turn your awkward poses into 
            works of art. We've been chasing the perfect shot for years – and sometimes, it even 
            stands still long enough for us to catch it!
          </p>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img 
            src={coffee}
            alt="A small house with blue chairs on the porch" 
            className="rounded-lg shadow-lg w-full h-auto max-h-[40vh] md:max-h-[40vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Coffee;
