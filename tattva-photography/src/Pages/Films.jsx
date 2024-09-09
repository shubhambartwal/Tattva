import VideoContainer from "../Components/VideoContainer";
import VideoSlideshow from "../Components/VideoSlideshow";

const Films = () => {
  return (
    <div className={`flex-grow bg-black`}>
  <VideoSlideshow/>
  <VideoContainer/>
    </div>
  );
};

export default Films;
