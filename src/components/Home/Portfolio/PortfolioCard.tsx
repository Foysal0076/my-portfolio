import { RightArrow45CircleIcon } from '@/components/common/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  featuredImage: string
  title: string
  description?: string
  category: string
  url: string
}

export const PortfolioCard = ({
  title,
  url,
  featuredImage,
  category,
  description,
}: Props) => {
  const router = useRouter()
  const onArrowButtonClick = () => {
    router.push(url)
  }

  return (
    <Link href={url}>
      <div className='flex h-full w-full flex-col'>
        <div className='w-full'>
          <Image
            src={featuredImage}
            width={280}
            height={200}
            alt={title}
            style={{ objectFit: 'cover', width: '100%' }}
            quality={100}
            placeholder='blur'
            blurDataURL={featuredImage}
          />
        </div>
        <div className='flex grow items-center justify-between px-6 py-5 backdrop-blur-2xl backdrop-brightness-200'>
          <div className=''>
            <h3 className='subtitle-2 mb-1 '>{title}</h3>
            <p className='caption-1'>{category}</p>
          </div>
          <div
            role='button'
            tabIndex={0}
            onClick={onArrowButtonClick}
            className='pl-2'>
            <RightArrow45CircleIcon />
          </div>
        </div>
      </div>
    </Link>
  )
}
