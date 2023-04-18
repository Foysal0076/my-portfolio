import Image from 'next/image'

const HeroSectionContact = () => {
  return (
    <div className='container max-w-screen-2xl'>
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-3'>
        <div className='mb-8 flex flex-grow flex-col items-center lg:mb-0 lg:items-start'>
          <p className='subtitle-1'>Top Rated Designer</p>
          <div className='body-2 mb-4'>
            I am available for hire on various marketplaces.
          </div>
          {/* icons */}
          <div className='mb-6 flex items-center justify-center gap-2'>
            <Image
              src='/assets/images/freelancer-logo.png'
              width={40}
              height={40}
              alt='freelancer'
            />
            <Image
              src='/assets/images/upwork-logo.png'
              width={40}
              height={40}
              alt='upwork'
            />
            <Image
              src='/assets/images/fiverr-logo.png'
              width={40}
              height={40}
              alt='fiverr'
            />
            <Image
              src='/assets/images/turing-logo.png'
              width={40}
              height={40}
              alt='turing'
            />
          </div>
          <p className='subtitle-1 mb-2'>Contact Me</p>
          <p className='body-1'>
            <span className='text-primary-500'>Email:</span>
            <a href='mailto:contact@mosharrof.com' className='text-neutral-200'>
              {' '}
              contact@mosharrof.com
            </a>
          </p>
          <p className='body-1'>
            <span className='text-primary-500'>Phone:</span>
            <a href='tel:+880 1615966703' className='text-neutral-200'>
              {' '}
              +880 1615966703
            </a>
          </p>
        </div>
        <div className='subtitle-1 order-3 text-center lg:order-2 lg:mt-auto'>
          I Love to Design <span className='text-primary-500'>Website</span>
        </div>
        <div className='relative order-2 mb-8 flex justify-center lg:order-3 lg:mb-0 lg:flex-col lg:justify-end'>
          <div className='absolute right-0 bottom-0 mr-4 mt-auto hidden w-full items-end justify-end text-center lg:flex'>
            <div className='mr-8 flex flex-col items-end justify-end'>
              <div className='mb-4 flex w-full justify-center'>
                <Image
                  src='/assets/images/google-big-logo.png'
                  width={80}
                  height={80}
                  alt='google-big-logo'
                />
              </div>
              <p className='subtitle-2 w-full'> Google Certified</p>
              <p className='subtitle-2 w-full'>
                Foundations of User Experience
              </p>
              <p className='subtitle-2 w-full'>(UX) Designer</p>
            </div>
          </div>
          <div className='mt-auto flex origin-bottom-right items-center gap-4 lg:ml-auto lg:mt-0 lg:mr-6 lg:rotate-90'>
            <div
              className='whitespace-nowrap text-btn-1 text-primary-500'
              style={{ textOrientation: 'mixed' }}>
              FOLLOW ME
            </div>
            <div className='h-[1px] w-10 bg-primary'></div>
            <div className='flex gap-3 lg:gap-4'>
              <a
                className='lg:-rotate-90'
                href={`whatsapp://send?abid=+8801615966703&text=Say Hi! to Mosharrof`}>
                <Image
                  src='/assets/images/whatsapp-outlined-logo.png'
                  width={24}
                  height={24}
                  alt='whatsapp-outlined'
                />
              </a>
              <a className='lg:-rotate-90' href='#'>
                <Image
                  src='/assets/images/facebook-outlined-logo.png'
                  width={24}
                  height={24}
                  alt='facebook-outlined'
                />
              </a>
              <a className='lg:-rotate-90' href='#'>
                <Image
                  src='/assets/images/github-outlined-logo.png'
                  width={24}
                  height={24}
                  alt='github-outlined'
                />
              </a>
              <a className='lg:-rotate-90' href='#'>
                <Image
                  src='/assets/images/instagram-outlined-logo.png'
                  width={24}
                  height={24}
                  alt='instagram-outlined'
                />
              </a>
              <a className='lg:-rotate-90' href='#'>
                <Image
                  src='/assets/images/dribble-outlined-logo.png'
                  width={24}
                  height={24}
                  alt='dribble-outlined'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionContact
