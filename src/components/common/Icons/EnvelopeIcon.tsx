type Props = {
  size?: number
}

export const EnvelopeIcon = ({ size = 24 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 24C5.38317 24 0 18.6168 0 12C0 5.38317 5.38317 0 12 0C18.6168 0 24 5.38317 24 12C24 18.6168 18.6168 24 12 24ZM18.223 16.2155C18.371 16.2155 18.4914 16.0951 18.4914 15.9472V8.41355L12.3859 13.2619C12.273 13.3517 12.1364 13.3965 12 13.3965C11.8635 13.3965 11.727 13.3516 11.614 13.2619L5.50856 8.41355V15.9472C5.50856 16.0951 5.62898 16.2155 5.77692 16.2155H18.223ZM17.2874 7.78448L12 11.9833L6.71255 7.78448H17.2874ZM19.7328 8.05284V15.9473C19.7328 16.7797 19.0555 17.457 18.223 17.457H5.77692C4.94442 17.457 4.26722 16.7797 4.26722 15.9473V8.05284C4.26722 7.22039 4.94447 6.54314 5.77692 6.54314H18.223C19.0555 6.54309 19.7328 7.22039 19.7328 8.05284Z'
        fill='url(#paint0_linear_19_794)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_19_794'
          x1='12'
          y1='0'
          x2='12'
          y2='24'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#FEBD02' />
          <stop offset='1' stopColor='#A6821A' />
        </linearGradient>
      </defs>
    </svg>
  )
}
