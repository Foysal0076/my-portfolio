import classNames from 'classnames'
import { useMemo } from 'react'

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick: () => void
  fullWidth?: boolean
}

const OutlinedButton = ({
  children,
  onClick,
  size = 'md',
  fullWidth,
}: Props) => {
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
        'rounded-none border border-primary bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium uppercase tracking-widest text-primary-500 ring-offset-0 transition-all duration-100 hover:bg-neutral-800 focus:ml-[1px] focus:ring-1 focus:ring-neutral-0',
        buttonClass,
        { 'w-full': fullWidth }
      )}>
      {children}
    </button>
  )
}

export default OutlinedButton
