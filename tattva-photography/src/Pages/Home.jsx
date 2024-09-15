
import CatchUs from '../Components/Catchus'
import ChooseUs from '../Components/ChooseUs'
import Collage from '../Components/Collage'
import DiscoverMore from '../Components/DiscoverMore'
import HomeVideo from '../Components/HomeVideo'
import OurStory from '../Components/OurStory'
import PhotographyShowcase from '../Components/PhotographyShowcase'
import ClientReviewSlideshow from '../Components/Review'
import collage from '../assets/collage.jpg';
import aside from '../assets/aside.jpg'
const Home = () => {
  return (
    <div><HomeVideo/>
    <OurStory/>
    <Collage collage={aside}/>
    <PhotographyShowcase/>
    <CatchUs/>
    <Collage collage={collage}/>
    <ChooseUs/>
    <DiscoverMore/>
    <ClientReviewSlideshow/>
    </div>
  )
}

export default Home