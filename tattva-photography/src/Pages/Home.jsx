
import videoBg from '../assets/videoplayback.mp4';
const Home = () => {
    return (
        <div className='main m-0 p-0 h-[100vh] w-[100%]'>
            <video className='w-[100%] h-[100%] object-cover' src={videoBg} autoPlay loop muted />
            <div className='top-0  left-0 content absolute w-[100%] h-[100%] display flex flex-col justify-center items-center text-white'>
                <h1 className='text-5xl'>Unveil the Essence of Your Events with </h1>
                <h1 className='text-4xl font-bold'>Tattva Photography</h1>
                <div className='font-bold'><h1>Every moment tells a unique story, and through our lens,</h1>
                    <h1>    we capture the elegance, excitement, and emotion of your most cherished events,</h1>
                    <h1> preserving them as timeless memories for years to come.</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
