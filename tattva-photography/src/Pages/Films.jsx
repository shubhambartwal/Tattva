import VideoContainer from "../Components/VideoContainer";
import VideoSlideshow from "../Components/VideoSlideshow";
import DiscoverMore from "../Components/DiscoverMore";
const Films = () => {
  return (
    <div className={`flex-grow bg-black`}>
      <VideoSlideshow />
      
      {/* Line in between the components */}
      <hr className="border-t-2 border-[#eab07d] my-8 mx-auto w-4/5" />
      <VideoContainer />
      <DiscoverMore />
    </div>
  );
};

export default Films;
