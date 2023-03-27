import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='relative flex min-h-screen flex-col bg-white dark:bg-neutral-900'>
      <div className=''>
        <Navbar />
        {children}
      </div>
      <div className='mt-auto w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
