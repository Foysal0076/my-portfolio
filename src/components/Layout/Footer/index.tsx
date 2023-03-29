import Copyright from '@/components/Layout/Footer/Copyright'
import FooterContact from '@/components/Layout/Footer/FooterContact'
import Services from '@/components/Layout/Footer/Services'
import SocialLinks from '@/components/Layout/Footer/SocialLinks'
import UsefulLins from '@/components/Layout/Footer/UsefulLinks'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative'>
      <div className='container relative max-w-screen-xl py-14'>
        <div className='flex flex-col justify-center '>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-5 '>
            <div className='lg:col-span-2'>
              <FooterContact />
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
      <Copyright />
    </footer>
  )
}

export default React.memo(Footer)
