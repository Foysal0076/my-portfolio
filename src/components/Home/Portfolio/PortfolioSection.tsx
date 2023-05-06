import { PortfolioCard } from '@/components/Home/Portfolio/PortfolioCard'
import OutlinedButton from '@/components/common/OutlinedButton'
import SectionHeader from '@/components/common/SectionHeader'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'

export type Portfolio = {
  featuredImage: string
  title: string
  description?: string
  category: string
  url: string
}

const portfolios: Portfolio[] = [
  {
    title: 'Oasis. - NFT Landing Page',
    category: 'Website Design',
    description: '',
    featuredImage: '/assets/images/oasis-nft-landing-page.jpg',
    url: '',
  },
  {
    title: 'GG Studio - Agency Landing Page ',
    category: 'Website Design',
    description: '',
    featuredImage: '/assets/images/gg-studio.jpg',
    url: '',
  },
  {
    title: 'HELLO - Landing Page',
    category: 'Saas Design',
    description: '',
    featuredImage: '/assets/images/hello-landing.jpg',
    url: '',
  },
  {
    title: 'Clue.io - Digital security',
    category: 'Saas Design',
    description: '',
    featuredImage: '/assets/images/clue.jpg',
    url: '',
  },
  {
    title: 'Language Learning',
    category: 'Mobile App Design',
    description: '',
    featuredImage: '/assets/images/language-learning.jpg',
    url: '',
  },
  {
    title: 'Mobile App Finder Job',
    category: 'Mobile App Design',
    description: '',
    featuredImage: '/assets/images/mobile-app-finder.jpg',
    url: '',
  },
  {
    title: 'Lainappi: mobile app for renting',
    category: 'UI/UX Case Study Design',
    description: '',
    featuredImage: '/assets/images/lainappi.jpg',
    url: '',
  },
  {
    title: 'Healtalk - Mental Health',
    category: 'UI/UX Case Study Design',
    description: '',
    featuredImage: '/assets/images/healtalk.jpg',
    url: '',
  },
  {
    title: 'SpaceX - X logo mark',
    category: 'Brand Identify Design',
    description: '',
    featuredImage: '/assets/images/space-x.jpg',
    url: '',
  },
]

const DEFAULT_COUNT = 6

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const [showCount, setShowCount] = useState(DEFAULT_COUNT)
  const handleShowMore = () => {
    setShowCount((prev) => prev + 3)
  }
  const filteredPortfolios = useMemo(() => {
    setShowCount(DEFAULT_COUNT)
    return portfolios.filter((portfolio) => {
      if (selectedCategory === 'All') {
        return portfolio
      } else {
        return portfolio.category === selectedCategory
      }
    })
  }, [selectedCategory])

  const portfoliosToShow = useMemo(() => {
    return filteredPortfolios.slice(0, showCount)
  }, [filteredPortfolios, showCount])

  const showMoreButton = useMemo(() => {
    return filteredPortfolios.length > portfoliosToShow.length
  }, [portfoliosToShow, filteredPortfolios])

  const PortfolioSlider = dynamic(
    () => import('@/components/Home/Portfolio/PortfolioSlider'),
    {
      ssr: false,
    }
  )
  const PortfolioFilterSlider = dynamic(
    () => import('@/components/Home/Portfolio/PortfolioFilterSlider'),
    {
      ssr: false,
    }
  )

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className='py-16 lg:py-20'>
      <div className='container max-w-5xl '>
        <SectionHeader
          title='MY WORKS & PORTFOLIO'
          heading='All Creative Selected Projects'
          paragraph='My portfolio showcases my passion for exploring unique design solutions and my diverse range of work, spanning UX/UI design, branding, and more.'
        />
        <div className='mt-8 md:mt-16'>
          <PortfolioFilterSlider
            onCategoryClick={handleCategoryClick}
            activeCategory={selectedCategory}
          />
          <div className='hidden sm:block'>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-3'>
              {portfoliosToShow.map((portfolio) => (
                <PortfolioCard
                  key={portfolio.title}
                  title={portfolio.title}
                  category={portfolio.category}
                  featuredImage={portfolio.featuredImage}
                  url={portfolio.url}
                />
              ))}
            </div>
            {showMoreButton && (
              <div className='mt-16 hidden justify-center sm:flex'>
                <OutlinedButton onClick={handleShowMore}>
                  VIEW MORE PORTFOLIO
                </OutlinedButton>
              </div>
            )}
          </div>

          <div className='portfolio-slider block sm:hidden'>
            <PortfolioSlider portfolios={filteredPortfolios} />
          </div>
        </div>
      </div>
    </div>
  )
}
