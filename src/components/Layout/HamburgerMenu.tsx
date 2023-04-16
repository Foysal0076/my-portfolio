import { FC } from 'react'
import classNames from 'classnames'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const HamburgerMenu: FC<Props> = ({ isOpen, onClick }) => {
  return (
    <div
      id='hamburger-bar'
      aria-label='Hamburger Menu'
      role='button'
      tabIndex={0}
      className={classNames(
        'hamburger-bar ring-offset-0 focus:ring-2 focus:ring-neutral-50',
        { open: isOpen }
      )}
      onClick={onClick}
      onKeyDown={onClick}>
      <span className='bg-neutral-0'></span>
      <span className='bg-neutral-0'></span>
      <span className='bg-neutral-0'></span>
    </div>
  )
}

export default HamburgerMenu
