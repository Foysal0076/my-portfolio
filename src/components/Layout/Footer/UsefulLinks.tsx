import { USEFUL_LINKS } from '@/shared/constants'
import Link from 'next/link'

const UsefulLins = () => {
  return (
    <div>
      <h2 className='subtitle-1 mb-4'>Useful Links</h2>
      <ul className='flex flex-col gap-4'>
        {(USEFUL_LINKS || []).map((link) => (
          <li key={link.url}>
            <p className='text-btn-1 uppercase text-neutral-600 hover:underline dark:text-neutral-50'>
              <Link href={link.url}>{link.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsefulLins
