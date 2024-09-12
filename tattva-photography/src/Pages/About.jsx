import { FaCamera } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Tattva Photography</h2>
        <div className="flex items-center justify-center mb-6">
          <FaCamera className="text-4xl mr-2" />
          <span className="text-lg">Capturing Moments, Creating Memories</span>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          At Tattva Photography, we believe in the power of photography to tell stories and evoke emotions. With over [X] years of experience, we specialize in capturing the essence of every occasion, from weddings to corporate events, with creativity and professionalism.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our approach is rooted in understanding our clients' unique needs and delivering exceptional results. We aim to not just capture moments but to craft them into timeless memories that you'll cherish forever.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Whether you're looking for stunning wedding photography, captivating portraits, or dynamic event coverage, Tattva Photography is dedicated to exceeding your expectations and creating images that resonate.
        </p>
      </div>
    </div>
  );
};

export default About;
