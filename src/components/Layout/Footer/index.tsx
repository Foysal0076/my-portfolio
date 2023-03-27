import Services from '@/components/Layout/Footer/Services'
import SocialLinks from '@/components/Layout/Footer/SocialLinks'
import UsefulLins from '@/components/Layout/Footer/UsefulLinks'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='relative'>
      <div className='container relative max-w-screen-xl py-14'>
        <div className='flex flex-col justify-center '>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-5 '>
            <div className='lg:col-span-2'>
              <h2 className='subtitle-1 mb-4'>
                <span className='heading-4 flex h-[45px]  items-center  lg:h-auto'>
                  Mosharrof
                  <span className='font-extrabold text-primary-500'>.</span>
                </span>
              </h2>
              <p className='body-1'>
                Let&apos;s work together to bring your design vision to life.
                Contact me today to start your next project. This message can
                inspire visitors to take action and reach out to you for your
                services.
              </p>
              <address className='mt-8 not-italic'>
                <span className='body-1 mb-4 font-overlock font-[900] text-neutral-900 dark:text-neutral-0'>
                  {' '}
                  Inquiries
                </span>
                <p className='body-1 mt-8 mb-4'>
                  <span className='font[900] text-neutral-900 dark:text-neutral-0'>
                    Address 1:
                  </span>{' '}
                  Shirajuddin Sarkar Road, Dattapara, Islampur, Tongi, Gazipur,
                  Dhaka - 1712
                </p>
                <p className='body-1'>
                  <span className='font[900] text-neutral-900 dark:text-neutral-0'>
                    Address 2:
                  </span>{' '}
                  House:31, Road:2, Block: E, Uposhohar Sylhet - 3100
                </p>
              </address>
            </div>
            <div className='lg:col-span-1'>
              <Services />
            </div>
            <div className='lg:col-span-1'>
              <UsefulLins />
            </div>
            <div className='lg:col-span-1'>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-neutral-800'>
        <div className='container max-w-screen-xl'>
          <div className='flex flex-wrap gap-2 py-5'>
            <p className='body-1'>
              © Copyright {currentYear} . All rights reserved.
            </p>
            <p className='body-1 md:ml-auto'>
              Designed by,{' '}
              <a href='#' className='text-link underline'>
                Mosharrof
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
