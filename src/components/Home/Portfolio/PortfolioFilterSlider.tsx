import classNames from 'classnames'

const categories = [
  'All',
  'Website Design',
  'Saas Design',
  'Mobile App Design',
  'UI/UX Case Study Design',
  'Brand Identify Design',
]

type Props = {
  activeCategory: string
  onCategoryClick: (category: string) => void
}

const PortfolioFilterSlider = ({ activeCategory, onCategoryClick }: Props) => {
  return (
    <div className='portfolio-filter-slider mb-8 flex gap-14 border border-neutral-800 bg-slate-50 py-4 px-8 dark:bg-neutral-900 md:mb-10'>
      {categories.map((category, index) => (
        <div
          key={index}
          role='button'
          tabIndex={0}
          onClick={() => onCategoryClick(category)}
          className='flex w-full min-w-fit justify-center'>
          <span
            className={classNames(
              'text-center text-btn-1 text-neutral-900 dark:text-neutral-0',
              {
                'text-primary-500 dark:text-primary-500':
                  activeCategory === category,
              }
            )}>
            {category}
          </span>
        </div>
      ))}
    </div>
  )
}

export default PortfolioFilterSlider
