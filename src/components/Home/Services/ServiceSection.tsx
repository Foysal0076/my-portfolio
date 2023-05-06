import { ServiceCard } from '@/components/Home/Services/ServiceCard'
import { ServiceHeader } from '@/components/Home/Services/ServiceHeader'

export const ServiceSection = () => {
  return (
    <div className='py-16 lg:py-20'>
      <div className='container max-w-5xl '>
        <ServiceHeader />
        <ul
          role='list'
          className='mt-14 flex flex-col flex-wrap  justify-center gap-6 md:flex-row md:gap-8 lg:mt-16'>
          <ServiceCard
            title='Web Design'
            description='Design is something magical to us, and I consider myself lucky to be able to get creative and build new websites.'
          />
          <ServiceCard
            title='Mobile App Design'
            description='I feel fortunate to have the opportunity to unleash my creativity and develop new mobile applications.'
          />
          {/* </ul> */}
          {/* <ul className='flex flex-col justify-center gap-6 md:flex-row md:gap-8'> */}
          <ServiceCard
            title='UI/UX Design'
            description='I am always willing and able to solve any inquiry that comes from my clients within minutes.'
          />
          <ServiceCard
            title='Saas Design'
            description='Designing SaaS products that are intuitive, efficient, and beautiful is my passion.'
          />
          <ServiceCard
            title='Brand Identity Design'
            description='Crafting memorable and impactful brand identities that resonate with audiences is what drives me as a designer.'
            mdScreenTextAlignment='text-center'
          />
        </ul>
      </div>
    </div>
  )
}
