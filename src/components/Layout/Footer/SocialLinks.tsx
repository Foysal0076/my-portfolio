import { SOCIAL_LINKS } from '@/shared/constants'

const SocialLinks = () => {
  return (
    <div>
      <h2 className='subtitle-1 mb-4'>Follow Me</h2>
      <ul className='flex flex-col gap-4'>
        {(SOCIAL_LINKS || []).map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target='_blank'
              className='text-btn-1 uppercase text-neutral-600 hover:underline dark:text-neutral-50'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
