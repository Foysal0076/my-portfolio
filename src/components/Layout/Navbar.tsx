import PrimaryButton from '@/components/common/PrimaryButton'
import HamburgerMenu from '@/components/Layout/HamburgerMenu'
import { memo, useState } from 'react'
import classNames from 'classnames'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const onMenuClick = () => {
    setOpen((prevValue) => !prevValue)
  }

  const onHireMeButtonClick = () => {
    //TODO: Add resume download link
    console.log('Hire me button clicked')
    return
  }

  return (
    <div className='sticky top-0 z-30 min-h-0 w-full border-b border-neutral-800 shadow-2xl backdrop-blur-xl'>
      <div className='container relative h-full max-w-screen-xl'>
        <nav className='flex h-full items-center border-red-400 py-4 text-primary lg:justify-between lg:py-4'>
          {/* If there is any space in font name, add underscore instead of space */}
          <span className='heading-4 flex items-center lg:h-auto'>
            Mosharrof
            <span className='font-extrabold text-primary-500'>.</span>
          </span>
          <ul className=' mt-0 hidden h-0 flex-row  items-center gap-10 transition-[height] duration-300 ease-in-out lg:flex lg:grow-0'>
            <li>
              <a href='#'>
                <p className='body-1 text-accent dark:text-accent'>Home</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <p className='body-1'>About me</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <p className='body-1'>Service</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <p className='body-1'>Resume</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <p className='body-1'>Portfolio</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <p className='body-1'>Blog</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <p className='body-1'>Contact</p>
              </a>
            </li>
          </ul>
          <div className='ml-auto inline-block lg:ml-0'>
            <PrimaryButton size='xs' onClick={onHireMeButtonClick}>
              Hire Me!
            </PrimaryButton>
          </div>
          <div className='ml-4 flex bg-neutral-800 lg:hidden lg:items-center'>
            <HamburgerMenu isOpen={open} onClick={onMenuClick} />
          </div>

          <div
            className={classNames(
              'absolute top-full -ml-4 h-0 w-full overflow-hidden bg-neutral-800 backdrop-blur-md transition-[height] duration-300 ease-in-out md:-ml-8 lg:hidden',
              { 'h-[296px]': open }
            )}>
            <ul className='flex flex-col items-center gap-4 py-4'>
              <li>
                <a href='#'>
                  <p className='body-1 text-accent dark:text-accent'>Home</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p className='body-1'>About me</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p className='body-1'>Service</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p className='body-1'>Resume</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p className='body-1'>Portfolio</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p className='body-1'>Blog</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p className='body-1'>Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default memo(Navbar)
