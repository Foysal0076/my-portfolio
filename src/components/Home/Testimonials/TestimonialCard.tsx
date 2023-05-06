type Props = {
  author: string
  designation: string
  testimonial: string
}

const TestimonialCard = ({ author, designation, testimonial }: Props) => {
  return (
    <div className='h-full max-w-md border border-neutral-800 bg-slate-50 py-6 px-8 dark:bg-neutral-900'>
      <div className='flex h-full flex-col justify-between'>
        <p className='testimonial body-1 mb-4 text-justify italic'>
          {testimonial}
        </p>
        <div>
          <span className='heading-4 block text-primary-500'> - {author}</span>
          <span className='subtitle-2 block'>{designation}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
