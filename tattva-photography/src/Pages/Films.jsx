import VideoContainer from "../Components/VideoContainer";
import VideoSlideshow from "../Components/VideoSlideshow";

const Films = () => {
  return (
    <div className={`flex-grow bg-black`}>
      <VideoSlideshow />
      
      {/* Line in between the components */}
      <hr className="border-t-2 border-[#7d6957] my-8 mx-auto w-4/5" />

      <VideoContainer />
    </div>
  );
};

export default Films;
