type Props = {
  title: string
  heading: string
  paragraph: string
}

const SectionHeader = ({ title, heading, paragraph }: Props) => {
  return (
    <div className='text-center'>
      <p className='mb-2 text-btn-1 uppercase text-neutral-900 dark:text-neutral-50'>
        {title}
      </p>
      <h2 className='heading-2 mb-4 text-primary-500'>{heading}</h2>
      <p className='body-1 mx-auto lg:max-w-lg'>{paragraph}</p>
    </div>
  )
}

export default SectionHeader
