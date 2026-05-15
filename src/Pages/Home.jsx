import Hero from '../Components/Hero'
import Pricing from '../Components/Pricing'
import Portfolio from '../Components/Portfolio'
import FeatureSection from '../Components/FeatureSection'
import Partners from '../Components/Partners'
import Reviews from '../Components/Reviews'


function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <Pricing />
     
      <Portfolio />

      <Partners />
      <Reviews />
    </>
  )
}

export default Home