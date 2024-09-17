
import CatchUs from '../Components/Catchus'
import ChooseUs from '../Components/ChooseUs'
import Collage from '../Components/Collage'
import DiscoverMore from '../Components/DiscoverMore'
import HomeVideo from '../Components/HomeVideo'
import OurStory from '../Components/OurStory'
import PhotographyShowcase from '../Components/PhotographyShowcase'
import ClientReviewSlideshow from '../Components/Review'
import collage from '../assets/collage.jpg';
import Coffee from '../Components/Coffee'
const Home = () => {
  return (
    <div className='bg-black'><HomeVideo />
      <OurStory />
      <hr className="border-t-2 border-[#eab07d] my-8 mx-auto w-4/5" />
      <PhotographyShowcase />
      <Coffee />
      <ChooseUs />
      <hr className="border-t-2 border-[#eab07d] my-8 mx-auto w-4/5" />
      <Collage collage={collage} />
      <hr className="border-t-2 border-[#eab07d] mt-8 mx-auto w-4/5" />
      {/* <CatchUs /> */}

      
     
      <ClientReviewSlideshow />
      <DiscoverMore />
    </div>
  )
}

export default Home