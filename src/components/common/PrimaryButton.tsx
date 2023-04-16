import classNames from 'classnames'
import { useMemo } from 'react'

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick: () => void
}

const PrimaryButton = ({ children, onClick, size = 'md' }: Props) => {
  const buttonClass = useMemo(() => {
    switch (size) {
      case 'xs':
        return 'btn-xs'
      case 'sm':
        return 'btn-1'
      case 'md':
        return 'btn-2'
      case 'lg':
        return 'btn-3'
      default:
        return 'btn-2'
    }
  }, [size])

  return (
    <button
      type='button'
      onClick={onClick}
      className={classNames(
        'rounded-none bg-primary px-5 py-2.5 text-center text-sm font-medium uppercase tracking-widest ring-offset-0 transition-all duration-200 hover:bg-primary-600 focus:ring-2 focus:ring-neutral-0',
        buttonClass
      )}>
      {children}
    </button>
  )
}

export default PrimaryButton
