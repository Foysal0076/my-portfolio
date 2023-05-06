import classNames from 'classnames'
import Image from 'next/image'

type Props = {
  company: string
  location: string
  from: string
  to?: string
  isPresent?: boolean
  logo: string
  isRemote?: boolean
}

export const ExperienceCompany = ({
  company,
  logo,
  location,
  from,
  to,
  isPresent = false,
  isRemote = false,
}: Props) => {
  const durationToText = isPresent ? 'Present' : to!

  return (
    <div>
      <span className='heading-4 mb-3 block'>
        {company} {isRemote && <span className='subtitle-2'> - Remote</span>}{' '}
      </span>
      <div className='flex gap-4'>
        <Image
          width={56}
          height={56}
          src={logo}
          alt={company}
          className='h-14 w-14'
        />
        <div className='flex flex-col gap-1'>
          <p className='body-2 max-w-[14.5rem]'>{location}</p>
          <p className='font-black text-neutral-900 dark:text-neutral-0'>
            {from} -{' '}
            <span className={classNames('', { 'text-primary-500': isPresent })}>
              {durationToText}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
