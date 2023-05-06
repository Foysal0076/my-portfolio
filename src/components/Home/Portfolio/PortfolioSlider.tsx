import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Portfolio } from '@/components/Home/Portfolio/PortfolioSection'
import { PortfolioCard } from '@/components/Home/Portfolio/PortfolioCard'
import { RightArrowIcon } from '@/components/common/Icons/RightArrowIcon'

type Props = {
  portfolios: Portfolio[]
}

const PortfolioSlider = ({ portfolios }: Props) => {
  return (
    <div className='relative'>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: `#next-btn-slider`,
          prevEl: `#prev-btn-slider`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 2.6,
            spaceBetween: 25,
          },
          1366: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
        }}>
        {portfolios.map((portfolio) => (
          <SwiperSlide key={portfolio.title}>
            <PortfolioCard
              title={portfolio.title}
              category={portfolio.category}
              featuredImage={portfolio.featuredImage}
              url={portfolio.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id='prev-btn-slider'
        className='absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
          <div className='flex h-8 w-8 rotate-180 cursor-pointer items-center justify-center rounded-full bg-primary'>
            <RightArrowIcon size={16} />
          </div>
        </div>
      </div>
      <div
        id='next-btn-slider'
        className='absolute top-1/2 right-6 z-10 -translate-y-1/2 cursor-pointer'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
          <div className='flex h-8 w-8  cursor-pointer items-center justify-center rounded-full bg-primary'>
            <RightArrowIcon size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSlider
