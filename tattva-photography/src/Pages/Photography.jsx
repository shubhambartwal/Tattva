import Gallery from '../Components/Gallery';

const Photography = () => {
  return (
    <div className="flex-grow pt-20">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <Gallery />
      </div>
    </div>
  );
};

export default Photography;
