
import CatchUs from '../Components/Catchus'
import ChooseUs from '../Components/ChooseUs'
import Collage from '../Components/Collage'
import DiscoverMore from '../Components/DiscoverMore'
import HomeVideo from '../Components/HomeVideo'
import OurStory from '../Components/OurStory'
import PhotographyShowcase from '../Components/PhotographyShowcase'
import ClientReviewSlideshow from '../Components/Review'
const Home = () => {
  return (
    <div><HomeVideo/>
    <OurStory/>
    <PhotographyShowcase/>
    <CatchUs/>
    <Collage/>
    <ChooseUs/>
    <DiscoverMore/>
    <ClientReviewSlideshow/>
    </div>
  )
}

export default Home