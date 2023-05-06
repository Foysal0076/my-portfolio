type Props = {
  title: string
  description: JSX.Element
}

export const ExperienceDetails = ({ title, description }: Props) => {
  return (
    <div className=''>
      <h3 className='heading-4 mb-2'>{title}</h3>
      {description}
    </div>
  )
}
