const Films = () => {
  return (
    <div className={`flex-grow  'pt-20'`}>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Films</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 text-center">Wedding Photography</div>
        <div className="bg-gray-200 p-4 text-center">Portrait Photography</div>
        <div className="bg-gray-200 p-4 text-center">Event Photography</div>
      </div>
    </div>
    </div>
  );
};

export default Films;
