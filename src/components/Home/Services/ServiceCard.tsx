import classNames from 'classnames'

type Props = {
  title: string
  description: string
  mdScreenTextAlignment?: 'text-left' | 'text-center' | 'text-right'
}

export const ServiceCard = ({
  title,
  description,
  mdScreenTextAlignment = 'text-left',
}: Props) => {
  const textAlignment = `text-center md:${mdScreenTextAlignment}`
  return (
    <div
      className={classNames(
        textAlignment,
        'group max-w-[27rem] border border-neutral-800 bg-slate-50 py-6 px-8 transition-all duration-100 hover:cursor-pointer hover:bg-primary-500 dark:bg-neutral-900 hover:dark:bg-primary-500'
      )}>
      <h3 className='heading-3 mb-4 group-hover:text-neutral-900'>{title}</h3>
      <p className='body-1 group-hover:text-neutral-800'>{description}</p>
    </div>
  )
}
