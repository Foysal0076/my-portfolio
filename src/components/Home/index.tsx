import { AboutMeSection } from '@/components/Home/AboutMe'
import { CertificateSection } from '@/components/Home/Certificates/CertificateSection'
import HeroSection from '@/components/Home/HeroSection'
import { PortfolioSection } from '@/components/Home/Portfolio'
import { ServiceSection } from '@/components/Home/Services'
import { ShallWeChatSection } from '@/components/Home/ShallWeChat'
// import { TestimonialSection } from '@/components/Home/Testimonials'
import { WorkExperience } from '@/components/Home/WorkExperience'
import dynamic from 'next/dynamic'

const HomeBlock = () => {
  const TestiMonial = dynamic(
    () => import('@/components/Home/Testimonials/TestimonialSection'),
    {
      ssr: false,
    }
  )
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
      <CertificateSection />
      {/* My projects */}
      <PortfolioSection />
      {/* Testimonials */}
      <TestiMonial />
      {/* Chat Banner */}
      <ShallWeChatSection />
      {/* My Articles / writings */}
    </div>
  )
}

export default HomeBlock
