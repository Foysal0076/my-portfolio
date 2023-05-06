import HeroSectionContact from '@/components/Home/HeroSection/HeroSectionContact'
import OutlinedButton from '@/components/common/OutlinedButton'
import PrimaryButton from '@/components/common/PrimaryButton'
import Image from 'next/image'

const HeroSection = () => {
  const onContactMeButtonClick = () => {
    console.log('Contact me button clicked')
    return
  }

  const onLetsTalkButtonClick = () => {
    console.log('Let talk button clicked')
    return
  }

  return (
    <div className='pb-12 pt-4 lg:pt-20'>
      <div className='align-center container flex max-w-screen-xl justify-center lg:pb-4'>
        <div className='text-center'>
          <div className='flex justify-center'>
            <Image
              src='/assets/images/mosharrof-portfolio-image.png'
              width={160}
              height={160}
              alt=''
            />
          </div>

          <h1 className='heading-4 mt-8 text-primary-500 dark:text-primary-500'>
            Hi, I&apos;m Mosharrof
          </h1>
          <p className='body-1'>UI/UX Designer at Staff Asia</p>
          <span className='heading-1 my-7 inline-block'>
            A Creative UX/UI Designer and Product Designer Based in Bangladesh.
          </span>

          <div className='mx-auto flex max-w-[22.75rem] justify-center'>
            <PrimaryButton size='xs' onClick={onContactMeButtonClick} fullWidth>
              GOT A PROJECT?
            </PrimaryButton>
            <OutlinedButton size='xs' onClick={onLetsTalkButtonClick} fullWidth>
              LET&apos;S TALK
            </OutlinedButton>
          </div>
        </div>
      </div>
      <HeroSectionContact />
    </div>
  )
}

export default HeroSection
