import { FC } from 'react'

type Props = {
  open: boolean
  onClick: () => void
}

const HamburgerMenu: FC<Props> = ({ open, onClick }) => {
  return (
    <div
      id='hamburger-bar'
      className={open ? 'hamburger-bar open' : 'hamburger-bar'}
      onClick={onClick}>
      <span className='bg-primary'></span>
      <span className='bg-primary'></span>
      <span className='bg-primary'></span>
    </div>
  )
}

export default HamburgerMenu
