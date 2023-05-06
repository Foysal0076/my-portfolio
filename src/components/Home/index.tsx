import { AboutMeSection } from '@/components/Home/AboutMe'
import HeroSection from '@/components/Home/HeroSection'
import { ServiceSection } from '@/components/Home/Services'
import { WorkExperience } from '@/components/Home/WorkExperience'

const HomeBlock = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* About me */}
      <AboutMeSection />
      {/* Services I offer */}
      <ServiceSection />
      {/* My work experience */}
      <WorkExperience />
      {/* My certificates */}
      {/* My projects */}
      {/* Testimonials */}
      {/* Chat Banner */}
      {/* My Articles / writings */}
    </div>
  )
}

export default HomeBlock
