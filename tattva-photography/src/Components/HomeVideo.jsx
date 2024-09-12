import videoBg from '../assets/final.mp4';

const HomeVideo = () => {
    return (
        <div className='main m-0 p-0 h-[100vh] w-[100%] relative'>
            <video className='w-full h-full object-cover' src={videoBg} autoPlay loop muted />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
                <h1 className='text-5xl font-bold text-center px-4 md:px-8'>
                    RAW, REAL, AUTHENTIC
                </h1>
                <div className='text-center mt-4 px-4 md:px-8'>
                    <p className='text-lg font-light'>
                        Experience exceptional photography that tells a unique story, crafted with creativity and expertise.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
