import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='relative'>
      <div className='relative z-30 flex min-h-screen flex-col'>
        <div className=''>
          <Navbar />
          {children}
        </div>
        <div className='mt-auto w-full'>
          <Footer />
        </div>
      </div>

      <div className='absolute inset-0 z-10 h-full w-full border border-red-500 bg-white dark:bg-neutral-900'>
        <div className='lines max-w-7xl bg-white dark:bg-neutral-900'>
          {/* Left side lines */}
          <div className='line hidden lg:block' />
          <div className='line' />
          <div className='line hidden lg:block' />
          <div className='line hidden lg:block' />
          <div className='line ' />

          {/* Right side lines */}
          <div className='line hidden lg:block' />
          <div className='line' />
          <div className='line hidden lg:block' />
          <div className='line hidden lg:block' />
          <div className='line' />
        </div>
      </div>
    </div>
  )
}

export default Layout
