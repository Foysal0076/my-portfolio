type Props = {
  size?: number
  color?: string
}

export const RightArrowIcon = ({ size = 14, color = '#292D32' }: Props) => {
  const height = size / 1.4
  return (
    <svg
      width={size}
      height={height}
      viewBox='0 0 14 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.60131 9L12.6013 5.00001L8.60131 0.999999'
        stroke={color}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.39865 4.99951L12.4893 4.99951'
        stroke={color}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
