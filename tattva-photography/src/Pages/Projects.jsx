import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          <img src="/path-to-image1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-2">Project 1</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <img src="/path-to-image2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-2">Project 2</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <img src="/path-to-image3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-2">Project 3</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
