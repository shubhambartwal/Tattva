
import videoBg from '../assets/final.mp4'
const HomeVideo = () => {
    return (
        <div className='main m-0 p-0 h-[100vh] w-[100%]'>
            <video className='w-[100%] h-[100%] object-cover' src={videoBg} autoPlay loop muted />
            <div className='top-0  left-0 content absolute w-[100%] h-[100%] display flex flex-col justify-center items-center text-white'>
                <h1 className='text-5xl font-bold'>RAW , REAL , AUTHENTIC </h1>
              
                <div className='font-light'><h1>Experience exceptional photography that tells a unique story , crafted  with creativity and expertise.</h1>
                  
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
