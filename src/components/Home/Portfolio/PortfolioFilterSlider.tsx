import { Swiper, SwiperSlide } from 'swiper/react'

import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
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
    <div className='portfolio-slider mb-8 border border-neutral-800 bg-slate-50 py-4 px-8 dark:bg-neutral-900 md:mb-10'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 2.4,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4.2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5.2,
            spaceBetween: 5,
          },
        }}>
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PortfolioFilterSlider
