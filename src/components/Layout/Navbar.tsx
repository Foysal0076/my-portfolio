import PrimaryButton from '@/components/common/PrimaryButton'
import HamburgerMenu from '@/components/Layout/HamburgerMenu'
import { memo, useState } from 'react'

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
    <div className='fixed top-0 z-20 min-h-0 w-full bg-neutral-900 backdrop-blur-md'>
      <div className='container h-full max-w-screen-xl'>
        <nav className='relative flex h-full py-2 text-primary lg:items-center lg:justify-between lg:py-6'>
          {/* If there is any space in font name, add underscore instead of space */}
          <span className='heading-4 flex h-[45px]  items-center  lg:h-auto'>
            Mosharrof
            <span className='font-extrabold text-primary-500'>.</span>
          </span>
          <ul
            className={
              open
                ? 'mt-10 flex h-[330px] grow flex-col items-center gap-4 overflow-hidden transition-[height] duration-300 ease-in-out  lg:mt-0 lg:grow-0 lg:flex-row lg:gap-12 lg:overflow-visible'
                : 'mt-10 flex h-0 grow flex-col items-center gap-4 overflow-hidden   transition-[height] duration-300 ease-in-out  lg:mt-0 lg:grow-0 lg:flex-row lg:gap-10 lg:overflow-visible'
            }>
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
            <li className='inline-block lg:hidden'>
              <PrimaryButton size='sm' onClick={onHireMeButtonClick}>
                Hire Me
              </PrimaryButton>
            </li>
          </ul>
          <div className='hidden lg:inline-block'>
            <PrimaryButton size='sm' onClick={onHireMeButtonClick}>
              Hire Me
            </PrimaryButton>
          </div>
          <div className='flex lg:hidden lg:items-center'>
            <HamburgerMenu open={open} onClick={onMenuClick} />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default memo(Navbar)
